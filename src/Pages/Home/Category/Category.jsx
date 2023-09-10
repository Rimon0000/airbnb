import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SubCategory from "../SubCategory/SubCategory";
import { GiHighGrass, GiHomeGarage, GiPalmTree, GiSkeletonKey, GiUmbrella, GiWoodCabin, } from "react-icons/gi";
import { CiSliderHorizontal } from "react-icons/ci";
import Filter from "../Filter/Filter";

const Category = () => {
    const [allCategory, setAllCategory] = useState([])
    const [tabValue, setTabValue] = useState("Rooms")
    const [searchQuery, setSearchQuery] = useState('');


   useEffect(() =>{
     fetch(`https://airbnb-server-rimon0000.vercel.app/allServices/${tabValue}`)
     .then(res => res.json())
     .then(data => setAllCategory(data))
   },[tabValue])

     //search
      const handleSearch = () => {
        const results = allCategory.filter(item => item.location.toLowerCase().includes(searchQuery.toLowerCase()));
        setAllCategory(results);
      };

    return (
        <div>
            <div className="my-2"><hr /></div>
            <div className="flex justify-between my-10 mx-10">
            <div className="flex gap-2">
                <div className="form-control">
                <input value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)} type="text" placeholder="Search" className="input input-bordered w-100" />
                </div>
                <div>
                <button className='btn btn-primary' onClick={handleSearch}>Search</button>
                </div>
                <div>
                 {allCategory.length > 0 ? "" : <p className="font-semibold pt-3">No results found.</p>}
                </div>
            </div>

              <div>
              <button className="btn btn-outline" onClick={()=>document.getElementById('my_modal_5').showModal()}><CiSliderHorizontal/> filter</button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <Filter></Filter>
              </dialog>
              </div>
            </div>
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