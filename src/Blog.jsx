import React from 'react';
import { CardsProyectos } from './Cards-Proyectos';

export const Blog = () => {
  return (
    <>

      <div className="container-fluid text-center">
        <div className="row margenes">

          <div className="col col-2 ">
            <img src="https://i.ibb.co/Yb8s4K4/2021045.jpg" className="d-block w-100 image-car" alt="..." />
            <h3 className='h3'>David Josué André Quiñonez Zeta</h3>

            <p className='p'>Hola! Me llamo David Quinoñez y soy un desarrollador. En este blog podras ver algunos de los proyectos que he realizado a lo largo de los años
              ademas podras ver un poco de los lenguajes y tecnologias que he manejado
            </p>

            <h5 style={{ color: 'white' }}>Haz Click En Mis Redes</h5>
            <a className='git' href="https://github.com/dquinonez-2021045"><h6>GitHub</h6></a>
            <a className='face' href="https://www.facebook.com/Davidq04"><h6>Facebook</h6></a>
            <a className='ig' href="https://www.instagram.com/davidq_04/"><h6>Instagram</h6></a>

            <br />
            <br />
            <h3 className='h3Conocimientos'>Conocimientos</h3>


            <h6 className='h6F'>HTML</h6>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{ width: "80%" }}></div>
            </div>

            <br />
            <h6 className='h6F'>CSS</h6>

            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{ width: "65%" }}></div>
            </div>
            <br />

            <h6 className='h6F'>Node.js</h6>

            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style={{ width: "60%" }}></div>
            </div>
            <br />

            <h6 className='h6F'>Java</h6>

            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{ width: "75%" }}></div>
            </div>

            <br />

            <h6 className='h6F'>Javascript</h6>

            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-success" style={{ width: "65%" }}></div>
            </div>

            <br />

            <h6 className='h6F'>React</h6>

            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar bg-danger" style={{ width: "25%" }}></div>
            </div>

          </div>
          <div className="col col-1 ">
          </div>

          <div className="col col-8">

            <CardsProyectos>
            </CardsProyectos>
          </div>

        </div>
      </div>

    </>
  );
}

