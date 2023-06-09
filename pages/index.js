import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout/Layout'
import Home from "@/components/Home";
const inter = Inter({ subsets: ['latin'] })
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
export default function Index({data}) {
  //console.log('jobs', data);
  return (
      <Layout>
        <Home  data={data}/>
      </Layout>
  )
}

export async function getServerSideProps({query}){

    const keyword = query.keyword || '';
    const location = query.location || '';

    const queryString = `?keyword=${keyword}&location=${location}`;

    const response = await axios.get(`${process.env.API_URL}/api/jobs?{queryString}`)
    const data = response.data
    return {
        props: {
            data,
        }
    }
}
