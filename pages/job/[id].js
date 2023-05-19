import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
//import Layout from '../components/layout/Layout'
import Layout from "@/components/layout/Layout";
import JobDetails from "@/components/job/JobDetails";
import Home from "@/components/Home";
const inter = Inter({ subsets: ['latin'] })
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";



export default function JobDetailsPage({job, candidates}) {
    console.log('job:', job);
    return (
        <Layout>
            <JobDetails job={job} candidates={candidates}/>
        </Layout>
    )
}

export async function getServerSideProps({params}){
    const response = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`)
    const job = response.data.job;
    const candidates = response.data.applications;
    return {
        props: {
            job,
            candidates,
        }
    }
}
