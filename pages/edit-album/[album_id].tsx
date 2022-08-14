import React, { useState, useEffect } from "react";
import CustomButton from "../../src/components/CustomButton";
import { Link, Card, CardContent } from "@mui/material";
import AlbumForm from "../../src/components/AlbumForm";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {
  const { album_id } = context.query;
  return {
    props: {
      albumId: album_id
    }
  };
}

const EditAlbum = ({ albumId }: any) => {
  const router = useRouter();
  const [fullAlbum, setFullAlbum] = useState({
    artistName: "",
    albumName: "",
    genre: "",
    length: "",
    releaseDate: "",
    pricePaid: "",
    label: "",
    deadWaxInfo: "",
    pressingYear: "",
    country: "",
    notes: "",
    discogsUrl: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/album?id=${albumId}`);
      const newData = await res.json();
      setFullAlbum(newData.message);
    };
    fetchData();
  }, []);

  const handleAlbumChange = (e: any) => {
    e.preventDefault();
    setFullAlbum({ ...fullAlbum, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    await fetch(`/api/albums/?id=${albumId}`, {
      method: "PUT",
      body: JSON.stringify(fullAlbum)
    });
    await router.push(`/album-view/${albumId}`);
  };

  return (
    <>
      <Card>
        <CardContent>
          <AlbumForm
            fullAlbum={fullAlbum}
            handleAlbumChange={handleAlbumChange}
          />

          <CustomButton onClick={handleUpdate} variant="contained">
            Update Album Info
          </CustomButton>

          <Link href="/">Go to the home page</Link>
        </CardContent>
      </Card>
    </>
  );
};

export default EditAlbum;
