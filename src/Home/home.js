import React from 'react'
import './home.css'
import download from '../Assets/images/download.png'
import image1 from '../Assets/images/image1.png'
const Home = () => {

    const style = {
        boxShadow: ' 0 2px gray',
       
    }
  return (
    <>
   

   <div className='container-fluid p-2'>
   <nav class="navbar navbar-expand-lg navbar-light bg-white ">
  <div class="container-fluid">
    <img src={download} className="me-5"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-primary" Size={50} aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-primary" href="#">HOT DEALS</a>
        </li>
        
      </ul>
      <form class="d-flex">
      <button class="btn text-danger me-3" type="submit">Arabic</button>
      <button class="btn text-danger me-3" type="submit">SIGN IN</button>
        <button class="btn btn-danger" type="submit">SIGN OUT</button>
      </form>
    </div>
  </div>
</nav>
</div>

<div>
<form class="d-flex p-5 w-100 h-100">
        <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
</div>
<div className='container d-flex '>
    <div className='row'>
        <div className='col-md-3 '>
<div class="card text-center " >
  <div class="card-body ">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
   
  </div>
</div>
</div>
<div className='col-md-3'>
<div class="card text-center" >
  <div class="card-body">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
   
  </div>
</div>
</div><div className='col-md-3'>
<div class="card text-center " >
  <div class="card-body">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
    
  </div>
</div>
</div><div className='col-md-3'>
<div class="card text-center " >
  <div class="card-body">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
    
  </div>
</div>
</div>
<div className='col-md-3 '>
<div class="card text-center mt-4" >
  <div class="card-body">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
    
  </div>
</div>
</div>
<div className='col-md-3'>
<div class="card text-center mt-4" >
  <div class="card-body">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
    
  </div>
</div>
</div>
<div className='col-md-3'>
<div class="card text-center mt-4 " >
  <div class="card-body">
    <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
    
  </div>
</div>
</div>
<div className='col-md-3'>
<div class="card text-center mt-4" >
  <div class="card-body">
  <img class="card-title" src={image1} />
    <p class="card-text">Etro Gym</p>
    
  </div>
</div>
</div>
</div>
</div>
<div className=' '>
<nav aria-label="..." >
  <ul class="pagination align-items-center justify-content-center mt-5">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item " aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
<div className='footer'>
<footer className='p-4'>
    
        © 2020 ALGYM All Rights Reserved.Developed by INOVA LLC
   

</footer>
</div>
    </>
  )
}

export default Home;
