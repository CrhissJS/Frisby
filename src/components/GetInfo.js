import React from 'react';

const GetInfo = ({ info }) => {
    
    if( info === "historia" ){
        return(
            <section id="1">
                <div className="container-history">
                    <h1>Historia</h1>
                    <img className="image-history" src="https://wpa.aquarius.frisby.com.co/wp-content/uploads/2018/12/detalle1.jpg" alt="history-img"></img>
                    <p>Todo comienza en 1977, cuando Alfredo Hoyos Mazuera y Liliana Restrepo Arenas inauguraron en la ciudad de Pereira la primera pizzería llamada FRISBY, causando sensación en los ciudadanos. A los pocos días comenzaron a buscar nuevos productos para ofrecer, y así llega el pollo apanado como una opción en el menú. Esta es la primera vez que en Colombia se encuentra el pollo en una preparación apanada. Este se convirtió en el producto más pedido por los clientes y en el icono de ventas de la cadena. En el año 1978 se inicia la apertura de nuevos puntos en diferentes ciudades del Eje Cafetero debido a su cercanía con la ciudad de origen. En el año 1987 los primeros locales en Bogotá y en el año 1990 en Medellín.</p>
                    <h2>En la actualidad</h2>
                    <img className="image-history-2" src="https://wpa.aquarius.frisby.com.co/wp-content/uploads/2018/12/detalle2.jpg" alt="history-img"></img>
                    <p>Actualmente Frisby cuenta con más de 200 puntos de venta en 50 cabeceras municipales, siendo así una de las cadenas con mayor cobertura en el territorio nacional. FRISBY cuenta con 3,500 colaboradores que se encargan de mantener en cada entrega las premisas de sabor, servicio y calidad. El sabor de Frisby ha posicionado a la compañía como la cadena número uno de pollo apanado del país porque todos sabemos que... "Nadie lo hace como frisby lo hace" </p>
                </div>
            </section>
        )
    } else if( info === "innovacion"){
        return(
            <section id="2">
                <div className="container-innovacion">
                    <p>El nombre de la marca surgió debido a la destreza que tenía uno de los pizzeros del negocio:
                    "El chef lanzaba la masa de la pizza girando en el aire, esto con el objetivo de darle al producto la delgadez y redondez necesaria, la pizza girando en aire se asimilaba a un frisbee, de allí el nombre de la marca"
                    <br></br>
                    <img className="image-history" src="https://wpa.aquarius.frisby.com.co/wp-content/uploads/2018/12/frase-frisby.jpg" alt="history-img"></img>
                    Fueron los primeros en vender pollo apanado en Colombia, tras traer la tecnología necesaria de los Estados Unidos, país al que visitaron en búsqueda de ideas innovadoras.
                    Allí observaron el movimiento de empresas líderes del pollo frito como KFC. Él junto con su hermano pensaron que esta idea podía ser replicada en Colombia y pese a que muchos le auguraban el fracaso su idea funcionó.

                    "Cuando él (don Alfredo Hoyos) lleva esas pizzas, lo que hace es poner un gran vidrio sobre la calle y en Pereira (en esa época, 1977) no habían visto una pizza nunca. En Pereira decían que esas eran unas arepas voladoras", contó el periodista Juan Fernández, en Blu Radio.

                    <h3>Promociones:</h3>
                    <img className="image-history" src="https://i.ibb.co/PrHv65F/img.png" alt="history-img"></img>
                    </p>
                </div>
            </section>
        )
    } else {
        return(
            <section id="3">
                <div className="container-mv">
                    <h2>Misión</h2>
                    <p>Somos una empresa de Economía Solidaria que contribuye a la satisfacción de las necesidades de sus asociados promoviendo el ahorro y mejoramiento económico, social y cultural; mediante la prestación de servicios, beneficios y capacitación que facilite su desarrollo acorde con los principios y valores cooperativos.</p>
                    <h2>Visión</h2>
                    <p>Ser una Empresa del Sector Solidario reconocida a nivel nacional por su calidad humana que propenda por mejorar en forma sostenible la calidad de vida de sus asociados, empleados y comunidad en general, ofreciendo servicios y beneficios de buena calidad y con responsabilidad social, que conlleven al cumplimiento de sus expectativas personales.</p>
                    
                    <h2>Vídeo "Frisby, la historia de una 'pizza voladora' que se convirtió en una gran cadena de pollo frito" </h2>
                    <iframe width="460" height="215" src="https://www.youtube.com/embed/KAHfTakEYPk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" allowfullscreen></iframe>
                </div>
            </section>
        )
    }


};

export default GetInfo;