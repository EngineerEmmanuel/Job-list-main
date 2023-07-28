import { useState, useEffect } from "react";
import Filter from "./Filter";

const Body2 = () => {
    const [type,setType]= useState("Internship");
    const [jobCategory, setJobCategory]= useState("Research")
    const [render, setRender]= useState([ ])
    useEffect(()=>{
            fetch(`https://entryleveljobs.me/api/jobs?type=${type}&category=${jobCategory}`)
            .then((res)=>res.json())
            .then((jobData)=>{

                console.log(jobData)
                setRender(jobData.data)
            })
    }, [ type, jobCategory])
    return ( 
        <section className="body-section">
            <div className="filter-job-listing-grid-con">
                {/* Iam passing down the setType and setJobCategory functions to the filter component to update them from there when a user clicks on it */}

            <Filter setType={setType} setJobCategory={setJobCategory}/>

            <div className="job-list-con">
            {
                render.map((jobInfo)=>{
                    return(
                        <div className="job-con" key={jobInfo.id}>
                            <div className="company-logo-con">
                            {jobInfo.company?.logo && <img src={jobInfo.company.logo} alt="Company Logo" />}

                            </div>
                            {jobInfo.company?.name && <p> <span className="bold">Company name</span>: {jobInfo.company.name}</p>}

                            <p> <span className="bold">Position</span>: {jobInfo.position}</p>
                            <p> <span className="bold">Job type</span>: {jobInfo.type.name}</p>
                            {/* some descriptions are longer than the container height, i am triming it to 200 letters */}
                            {jobInfo?.description && <p> <span>Job description</span>: {jobInfo.description.substring(0,300)}</p>}
                            <button> <a href={jobInfo.link}>Apply now</a> </button>
                        </div>
                    )
                })
            }
            </div>
            </div>
            
        </section>
     );
}
 
export default Body2;