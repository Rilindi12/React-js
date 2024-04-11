import '../About/about.css'
export default function About ({title,desctription,image}) {
  return (
    <div className ='container-about'>
        <div className='about-text'>
          <h1>{title}</h1>
          <p>{desctription}</p>
        </div>
      <div className='about-image'>
        <img src={image} alt='Mackbook.jpg' id='images-about'/>
      </div>
    </div>
  )
}