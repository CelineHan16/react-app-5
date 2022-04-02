import "./ProgressBar.css";

function ProgressBar({ progress, color }) {
  const style = {
    width: progress + "%",
    backgroundColor: color,
  }

  return ( 
    <div className="ProgressBar">
      <div style={style}></div>
    </div>
  )
}

export default ProgressBar;