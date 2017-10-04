var cities = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Egorian",
        image: "img/cities/egorian.png",
        description: "Egorian è la capitale dell'impero di <span style='color: gold'>Cheliax</span>. Cheliax è un impero estramente longevo attualmente governato dalla casata nobiliare dei <span style='color: gold'>Thrune</span>. I Thrune sono conosciuti per essere ascesi al potere con la forza tramite alleanze con i servitori dell'inferno. Cheliax è impero fortemente basato sulla sua forza militare e sulla conquista delle regioni circostanti. Egorian ospita molte altre casate nobiliari, come la casata <span style='color: gold'>Sarini</span> (conosciuti per i loro malvagi giullari e bardi, bracci destri della casata Thrune), la casata <span style='color: gold'>Charthagnion</span> (conosciuti per la loro grande saggezza e la loro vicinanza con i diavoli) e la casata <span style='color: gold'>Henderthane</span> (conosciuti per essere degli incredibili forgiatori di armi e armature)."
      },
      geometry: {
        type: 'Point', 
        coordinates: [-45.5712890625, 75.99483913802067]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Villista",
        image: "img/cities/villista.png",
        description: "La capitale della <span style='color: gold'>Regione dei fiumi</span>. Villista è una fiorente città commerciale, abitata da innumerevoli artigiani e negozianti pronti ad offrire ogni tipo di merce. Villista è governata da un triumvirato le cui attuali teste sono: <span style='color: gold'>Adrian Augustus VII</span>, <span style='color: gold'>Alabyran Rossabruma</span> e <span style='color: gold'>Sulelei</span> che ricopre anche il ruolo di generale delle <span style='color: gold'>Justiciar</span> in città. Il patrono di Villista è <span style='color: gold'>Abadar</span>."
      },
      geometry: {
        type: 'Point', 
        coordinates: [-32.607421875, 78.99657757942214]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Eishi",
        image: "img/cities/eishi.png",
        description: "Un villagio rurale orientale fondato dal potente <span style='color: gold'>Faerdin</span>. I <span style='color: gold'>Kami</span> proteggono questo luogo da millenni. La montagna adiacente al villaggio custodisce il secondo sigillo del portale degli <span style='color: gold'>Svartalfar</span>.",
      },
      geometry: {
        type: 'Point', 
        coordinates: [-33.8818359375, 79.44847739961162]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Foresta sommersa",
        image: "img/cities/foresta_sommersa.png",
        description: "La foresta creata e protetta da <span style='color: gold'>Venali</span>, il luogo in cui il primo sigillo del portale degli <span style='color: gold'>Svartalfar</span> risiede.",
      },
      geometry: {
        type: 'Point', 
        coordinates: [-28.916015625, 78.75065903068668]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Artume",
        image: "img/cities/artume.png",
        description: "Artume è una piccola e tranquilla cittadina di campagna, conosciuta nella nazione per i suoi abili cacciatori e per l’allevamento e l’esportazioni di felini (piccoli, come per esempio ghepardi, leopardi o linci e grandi come per esempio tigri o leoni). Negli ultimi tempi la tensione tra i banchieri della capitale e il governo cittadino è cresciuta. La capitale <span style='color: gold'>Villista</span> vuole aprire rotte commerciali con Artume, ma il governo cittadino rifiuta ogni accordo senza neanche più ascoltare i commercianti mandati dal triumvirato.  Pochi mesi fa è apparsa dal nulla una foresta non molto lontano dalla città, che ha ha agitato tutti gli animali selvaggi nei dintorni e risvegliato bestie che si pensava fossero estinte nella regione. Artume organizza annualmente un evento aperto a chiunque chiamato <span style='color: gold'>'La Grande Caccia'</span>. Attualmente Artume è stata conqistata da Lanaya che sta utilizzando la decaduta cittadina per ospitare il suo esercito di <span style='color: gold'>demoni</span>, <span style='color: gold'>non morti</span> e <span style='color: gold'>Svartalfar</span>."
      },
      geometry: {
        type: 'Point', 
        coordinates: [-31.2451171875, 79.27814037133113]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Absolom",
        image: "img/cities/absolom.png",
        description: "La capitale di <span style='color: gold'>Golarion</span> dove la <span style='color: gold'>Pietrastella</span> è custodita."
        
      },
      geometry: {
        type: 'Point', 
        coordinates: [-26.6748046875, 74.9707914022581]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Lini",
        image: "img/cities/lini.png",
        description: "La citta elfica il cui patrono è <span style='color: gold'>Athar</span>. Tutti gli eroi elfici sono originari di questa antica e fiorente cittadina.",
      },
      geometry: {
        type: 'Point', 
        coordinates: [-40.6494140625, 79.02171239525758]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Torre Tinuben",
        image: "img/cities/tinuben_tower.png",
        description: "La torre costruita da <span style='color: gold'>Tinuben</span> e dedicata a se stesso. Si dice che al suo interno risieda il terzo sigillo del portale degli <span style='color: gold'>Svartalfar</span>.",
      },
      geometry: {
        type: 'Point', 
        coordinates: [-41.396484375, 79.2125376197271]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Foresta dell'ex concilio",
        image: "img/cities/druidic_forest.png",
        description: "<span style='color: gold'>Lanaya</span> ha assassinato l'intero concilio druidico che proteggeva la foresta. Ora solo i loro patroni <span style='color: gold'>La Foresta e Il Fiume</span> proteggono la foresta e i rimanenti druidi ancora in vita. Si dice che <span style='color: gold'>Venali</span> abbia appreso tutte le sue conoscente in questo luogo.",
      },
      geometry: {
        type: 'Point', 
        coordinates: [-39.375, 79.12168576905897]
      }
    },
    {
      type: 'Feature',
      properties: {
        featureType: "city",
        name: "Torre di Lanaya",
        image: "img/cities/lanaya_tower.png",
        description: "Dopo aver corrotto <span style='color: gold'>Artume</span> e tutti i suoi abitanti trasformandoli in non morti, <span style='color: gold'>Lanaya</span> ha costruito una immensa torre nera di fronte alla necropoli. La torre è situata al centro della corruzione provocata dalla ragazza."
      },
      geometry: {
        type: 'Point', 
        coordinates: [-30.498046875, 79.31079373546652]
      }
    }
  ]
};