import axios from "axios";

interface FullAlbum {
    userId: number,
    id: number,
    title: string,
    photos: Photo[]
}

type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string
    thumbnailUrl: string,
}

type Album = {
    userId: number,
    id: number,
    title: string,
}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
    if (!userIds) return []
    const photos = (await axios.get(PHOTOS_URL)).data as Photo[]
    const albums = (await axios.get(ALBUMS_URL)).data as Album[]
    

    return []
}

mapPhotoToAlbum([])