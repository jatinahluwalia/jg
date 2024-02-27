
const BoxLayoutDesign = () => {
    const Boxes = [{
        color : "bg-[#2773b0]"
    },{
        color : "bg-[#295d91]"
    },{
        color : "bg-[#1f3759]"
    }]
  return (
    <div className="flex flex-col justify-left ">
        {Boxes.map((val,i) =><div className={`w-24 h-4 border-[#5789b4] border-1 ${val.color}`} key={i}></div>)}
    </div>
  )
}

export default BoxLayoutDesign
