import ChildPerson from "./ChildPerson";


//Props (short for “properties”) are read-only inputs passed from a parent component to a child component to share data and control the child’s behavior or display.
const ParentPerson =()=>{
    const hobbies =["Cricket","Movies","Games","Football"];
    return (
        <div>
            <ChildPerson name="Allwin" age={24} isMarried={false} hobbies={hobbies} />
        </div>
    )
}

export default ParentPerson;