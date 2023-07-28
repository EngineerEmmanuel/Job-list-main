import  { useState, useEffect } from 'react';

const Body = (props) => {
  const [categoriesBtn, setCategoriesBtn] = useState([]);
  const [typeBtn, setTypeBtn] = useState([]);
  const {setType, setJobCategory} = props;

  const filterBtnCategoryUrl = "https://entryleveljobs.me/api/jobs/category";

  const getFilterCategoryBtns = () => {
    fetch(filterBtnCategoryUrl)
      .then((res) => res.json())
      .then((cateData) => {
        setCategoriesBtn(cateData.data);
        console.log(cateData)
      });
  };


//   let`s fetch the job types buttons
const typeUrl= "https://entryleveljobs.me/api/jobs/type";

const getTypeBtn = ()=>{
    fetch(typeUrl)
    .then((res)=> res.json())
    .then((typeData)=>{
        setTypeBtn(typeData.data)
    })
}

  // invoking the functions when the page loads
  useEffect(() => {
    getFilterCategoryBtns();
    getTypeBtn();
  }, []);

  return (
    <section className="filter-section">
      
      <h4>Filter jobs by categories :</h4>
      <div className="category-buttons">
        
        {categoriesBtn.map((btnInfo) => (
          <div className="btn-con" key={btnInfo.categoryId}>
            <button onClick={()=> setJobCategory(`${btnInfo.name}`)}>{btnInfo.name}</button>
          </div>
        ))}

      </div>
            <div className="type-btn-main-con">
            <h4>Filter jobs by types :</h4>
            <div className="type-buttons">
      
        {
            typeBtn.map((typeInfo)=>{
                return(
                    <div className="type-btn-con">
                        <button onClick={()=> setType(`${typeInfo.name}`)}>{typeInfo.name}</button>
                    </div>
                )
            })
        }
      </div>
            </div>
      

    </section>
  );
};

export default Body;
