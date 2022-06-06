import React,{useState} from 'react';


interface Props{
    id: number;
    title: string;
    author: string;
    read: string;
    time: string;
    image: string;
    isExplore: string;
}

export default function CardData(page:string){


    const  [lib, SetLib] =React.useState<Props[]>([
    
    {
        id:1,
        title:"Beyond Enterprenureship",
        author:"Ericson",
        read:"1.9k reads",
        time:"13-minute read",
        image:"../assets/1.png",
        isExplore:"2"

    },

    {
        id:2,
        title:"Bring Your Human to Work",
        author:"Ericson",
        read:"1.9k reads",
        time:"13-minute read",
        image:"../assets/1.png",
        isExplore:"2"

    }

   

]);

    const  [fin, SetFin] =useState([
    
    {
        id:3,
        title:"Lives of the Stoicks",
        author:"Ericson",
        read:"1.9k reads",
        time:"13-minute read",
        image:"../assets/1.png",
        isExplore:"3"

    },

    {
        id:4,
        title:"Dropshipping",
        author:"Ericson",
        read:"1.9k reads",
        time:"13-minute read",
        image:"../assets/1.png",
        isExplore:"3"

    }

   

]);

const Finished=(li:number)=>{
      
         SetLib(lib.filter((e)=>{
            if (e.id===li){
                SetFin([...fin,e])
            }
             return (e.id!==(li))
        }))

}

const ReadAgain=(li:number)=>{
    SetFin(fin.filter((e)=>{
        if (e.id===li){
            SetLib([...lib,e])
        }
         return (e.id!==(li))
    }))


    
}



}