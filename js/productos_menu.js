const array_productos = [
    {id:1, tipo:"Bebidas", categoria:"Refrescos", nombre:"A&W Cream Soda", descripcion:"Lata - 355 ml", precio:80, imagen:"cream_soda.webp"},
    {id:2, tipo:"Bebidas",  categoria:"Refrescos", nombre:"A&W Root Beer", descripcion:"Lata - 355 ml", precio:80, imagen:"root_bear.webp"},
    {id:3, tipo:"Bebidas",  categoria:"Refrescos", nombre:"Coca Cola Original", descripcion:"Lata - 355 ml", precio:40, imagen:"coca_cola.webp"},
    {id:4, tipo:"Bebidas",  categoria:"Refrescos", nombre:"Snapple Limón Light", descripcion:"Botella - 473 ml", precio:40, imagen:"snapple_limon_light.webp"},
    {id:5, tipo:"Bebidas", categoria:"Refrescos", nombre:"Boing Mango", descripcion:"Botella - 355 ml", precio:35, imagen:"boing_mango.webp"},
    {id:6, tipo:"Bebidas",  categoria:"Refrescos", nombre:"Sidral Mundet", descripcion:"Lata - 355 ml", precio:35, imagen:"sidral_mundet.webp"},
    {id:7, tipo:"Bebidas",  categoria:"Refrescos", nombre:"Agua Mineral Peñafiel", descripcion:"Lata - 355 ml", precio:30, imagen:"agua_mineral_peñafiel.webp"},
    {id:8, tipo:"Bebidas",  categoria:"Cocteleria", nombre:"Poblanito", descripcion:"", precio:125, imagen:"poblanito.webp"},
    {id:9, tipo:"Bebidas",  categoria:"Cocteleria", nombre:"Beso de Sabina", descripcion:"", precio:145, imagen:"beso_de_sabina.webp"},
    {id:10, tipo:"Bebidas",  categoria:"Cocteleria", nombre:"Mojito", descripcion:"", precio:100, imagen:"mojito.webp"},
    {id:11, tipo:"Bebidas",  categoria:"Cocteleria", nombre:"Carajillo", descripcion:"", precio:100, imagen:"carajillo.webp"},
    {id:12, tipo:"Bebidas",  categoria:"Cocteleria", nombre:"Gin Tónico", descripcion:"", precio:165, imagen:"gin_tonico.webp"},
    {id:13, tipo:"Bebidas",  categoria:"Cervezas", nombre:"Heineken", descripcion:"355 ml", precio:65, imagen:"heineken.webp"},
    {id:14, tipo:"Bebidas",  categoria:"Cervezas", nombre:"Bohemia Pilsner", descripcion:"355 ml", precio:55, imagen:"bohemia_pilsner.webp"},
    {id:15, tipo:"Bebidas",  categoria:"Cervezas", nombre:"Nochebuena", descripcion:"355 ml", precio:60, imagen:"nochebuena.webp"},
    {id:16, tipo:"Bebidas",  categoria:"Cervezas", nombre:"Ticus Porter", descripcion:"355 ml", precio:140, imagen:"ticus_porter.webp"},
    {id:17, tipo:"Bebidas",  categoria:"Bebibas Alcohólicas", nombre:"Ron Bacardi Blanco", descripcion:"Copa 2 oz", precio:50, imagen:"bacardi_blanco.webp"},
    {id:18, tipo:"Bebidas",  categoria:"Bebibas Alcohólicas", nombre:"Ron Abuelo", descripcion:"Copa 2 oz", precio:60, imagen:"abuelo.webp"},
    {id:19, tipo:"Bebidas",  categoria:"Bebibas Alcohólicas", nombre:"Whiskey Jack Daniel's 7", descripcion:"Copa 2 oz", precio:125, imagen:"jack_daniels_7.webp"},
    {id:20, tipo:"Bebidas",  categoria:"Bebibas Alcohólicas", nombre:"Mezcal 400 conejos", descripcion:"Copa 2 oz", precio:160, imagen:"400_conejos.webp"},
    {id:21, tipo:"Bebidas",  categoria:"Bebibas Alcohólicas", nombre:"Gin Bombay Sapphire", descripcion:"Copa 2 oz", precio:140, imagen:"bombay_sapphire.webp"},
    {id:22, tipo:"Bebidas",  categoria:"Bebibas Alcohólicas", nombre:"Tequila 1800 Reposado", descripcion:"Copa 2 oz", precio:150, imagen:"1800_reposado.webp"},
    {id:23, tipo:"Alimentos", categoria:"BBQ", nombre:"BBQ Sampler", descripcion:"Mezcla de nuestras tres principales carnes ahumadas (Pork Ribs, Brisket y Pulled Pork) acompañadas de tres Texas Toast", precio:415, imagen:"BBQ_Sampler.webp"},
    {id:24, tipo:"Alimentos",  categoria:"BBQ", nombre:"Brisket", descripcion:"Pecho de res ahumado y endulzado con nuestra Smokes BBQ Sauce. Incluye un Texas Toast", precio:235, imagen:"Brisket.webp"},
    {id:25, tipo:"Alimentos",  categoria:"BBQ", nombre:"Pulled Pork", descripcion:"Espaldilla de cerdo ahumada y bañada en nuestra Smokes BBQ Sauce. Incluye un Texas Toast.", precio:195, imagen:"Pulled_Pork.webp"},
    {id:26, tipo:"Alimentos",  categoria:"BBQ", nombre:"Fat Bastard's Ribs", descripcion:"Costillas de hombro de cerdo ahumadas y bañadas en Smokes BBQ Sauce. Incluye un Texas Toast.", precio:270, imagen:"Fat_Bastard_Ribs.webp"},
    {id:27, tipo:"Alimentos",  categoria:"BBQ", nombre:"Turkey Leg", descripcion:"Pierna de pavo con doble ahumado, servida con salsa de arándano y cereza. Incluye un Texas Toast.", precio:490, imagen:"Turkey_Leg.webp"},   
    {id:28, tipo:"Alimentos",  categoria:"Sandwiches", nombre:"Brisket Sandwich", descripcion:"Sandwich de pecho de res ahumado y caramelizado con Smokes BBQ Sauce dentro de un bollo americano", precio:180, imagen:"Brisket_Sandwich.webp"},
    {id:29, tipo:"Alimentos",  categoria:"Sandwiches", nombre:"Pulled Pork Sandwich", descripcion:"Sandiwch de espaldilla de cerdo ahumada y bañada en Smokes BBQ Sauce dentro de un bollo americano", precio:155, imagen:"Pulled_Pork_Sandwich.webp"},
    {id:30, tipo:"Alimentos",  categoria:"Sandwiches", nombre:"Rib Sandiwch", descripcion:"Sandwich de costilla de cerdo ahumada y bañada con Smokes BBQ Sauce, chicharrón de queso gouda, cebolla caramelizada, Mayo Chipotle y chile jalapeño a la sal dentro de Pan Pretzel", precio:245, imagen:"Rib_Sandwich.webp"},
    {id:31, tipo:"Alimentos",  categoria:"Sides", nombre:"MVP Fried Sampler", descripcion:"Unión de Jalapeño Poppers, Cheese Sticks, Mac & Tocino y Onion Rings.", precio:450, imagen:"MVP_Fried_Sampler.webp"},
    {id:32, tipo:"Alimentos",  categoria:"Sides", nombre:"Jalapeños a la sal", descripcion:"Jalapeños toreados con salsa gruesa y acompañados de limón verde", precio:60, imagen:"Jalapenos_Sal.webp"},
    {id:33, tipo:"Alimentos",  categoria:"Postres", nombre:"French Toast", descripcion:"Pan francés con tocino, maple, mantequilla y un toque de leche condensada", precio:100, imagen:"French_Toast.webp"},
];