import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SubCategory from "../SubCategory/SubCategory";
import { GiHighGrass, GiHomeGarage, GiPalmTree, GiSkeletonKey, GiUmbrella, GiWoodCabin, } from "react-icons/gi";


const Category = () => {
    const [allCategory, setAllCategory] = useState([])
    const [tabValue, setTabValue] = useState("Rooms")
    

   useEffect(() =>{
     fetch(`http://localhost:5000/allServices/${tabValue}`)
     .then(res => res.json())
     .then(data => setAllCategory(data))
   },[tabValue])

    return (
        <div>
            <div className="my-8"><hr /></div>
            <Tabs>
               <TabList className='text-center font-semibold mb-5'>
                 <Tab onClick={() => setTabValue("Rooms")}>
                 <div className="ml-4"><GiHomeGarage/></div>
                    Rooms</Tab>
                 <Tab onClick={() => setTabValue("Countryside")}>
                 <div className="ml-8"><GiHighGrass/></div>
                    CountrySide</Tab>
                 <Tab onClick={() => setTabValue("Tropical")}>
                 <div className="ml-4"><GiPalmTree/></div>
                    tropical</Tab>
                 <Tab onClick={() => setTabValue("New")}>
                    <div className="ml-3"><GiSkeletonKey/></div>
                    New</Tab>
                 <Tab onClick={() => setTabValue("Cabins")}>
                 <div className="ml-4"><GiWoodCabin/></div>
                    Cabins</Tab>
                 <Tab onClick={() => setTabValue("Beach")}>
                 <div className="ml-4"><GiUmbrella/></div>
                    Beach</Tab>
               </TabList>
           
               <TabPanel>
                 <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                 {
                  allCategory.map(item => <SubCategory 
                    key={item._id}
                    item={item}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
                 <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                 {
                  allCategory.map(item => <SubCategory 
                    key={item._id}
                    item={item}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
                 <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                 {
                  allCategory.map(item => <SubCategory 
                    key={item._id}
                    item={item}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
                 <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                 {
                  allCategory.map(item => <SubCategory 
                    key={item._id}
                    item={item}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
                 <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                 {
                  allCategory.map(item => <SubCategory 
                    key={item._id}
                    item={item}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
                 <div className='grid md:grid-cols-4 sm:grid-cols-1'>
                 {
                  allCategory.map(item => <SubCategory 
                    key={item._id}
                    item={item}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
             
              
            </Tabs>
            
        </div>
    );
};

export default Category;