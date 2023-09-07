import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SubCategory from "../SubCategory/SubCategory";
import { GiHighGrass, GiHomeGarage, GiPalmTree, GiSkeletonKey, GiUmbrella, GiWoodCabin, } from "react-icons/gi";


const Category = () => {
    const [allCategory, setAllCategory] = useState([])
    const [tabValue, setTabValue] = useState("marvel")

  useEffect(() =>{
    fetch(`https://toy-server-theta.vercel.app/allCategorys/${tabValue}`)
    .then(res => res.json())
    .then(data => setAllCategory(data))
  },[tabValue])

    return (
        <div>
            <h2 className='font-semibold text-2xl text-center m-5 p-5'>Our Categories</h2>
            <Tabs>
               <TabList className='text-center font-semibold mb-5'>
                 <Tab onClick={() => setTabValue("marvel")}>
                 <div className="ml-4"><GiHomeGarage/></div>
                    Rooms</Tab>
                 <Tab onClick={() => setTabValue("avengers")}>
                 <div className="ml-8"><GiHighGrass/></div>
                    CountrySide</Tab>
                 <Tab onClick={() => setTabValue("star wars")}>
                 <div className="ml-4"><GiPalmTree/></div>
                    tropical</Tab>
                 <Tab onClick={() => setTabValue("star wars")}>
                    <div className="ml-3"><GiSkeletonKey/></div>
                    New</Tab>
                 <Tab onClick={() => setTabValue("star wars")}>
                 <div className="ml-4"><GiWoodCabin/></div>
                    Cabins</Tab>
                 <Tab onClick={() => setTabValue("star wars")}>
                 <div className="ml-4"><GiUmbrella/></div>
                    Beach</Tab>
               </TabList>
           
               <TabPanel>
                 <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                 {
                  allCategory.map(toy => <SubCategory 
                    key={toy._id}
                    toy={toy}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
               <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                 {
                  allCategory.map(toy => <SubCategory 
                    key={toy._id}
                    toy={toy}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
               <div className='grid md:grid-cols-3 sm:grid-cols-1'>
                 {
                  allCategory.map(toy => <SubCategory 
                    key={toy._id}
                    toy={toy}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default Category;