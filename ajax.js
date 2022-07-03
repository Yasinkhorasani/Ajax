'use strict';

        const handleLoad = evt => {
            // Prüfen, ob das Laden erfolgreich war
            // Status 200 steht für "Erfolg"
            if (evt.target.status == 200) {
                console.log(evt.target.responseText);
            } else {
                console.log(evt.target.statusText);
            }
        }

        const loadData = () => {
            // AJAX ist eine Abkürzung (Asynchronious Javascript And XML)
            // Ajax ist ein Begriff

            // Schritt 1: Anlegen des Ajax-Objektes
            const xhr = new XMLHttpRequest();

            // Schritt 2: Was soll wie geladen werden 
            // Methoden: get, post, put, delete, options, ...
            // Für jetzt interessiert uns nur "get" zum Laden von Daten

            // Relative Adresse
            xhr.open('get', 'data/data.txt');

            // Absolute Adresse
            // xhr.open('get', 'http://127.0.0.1/data/data.txt');

            // Schritt 3: Eventlistener, der nach dem Laden gefeuert wird
            xhr.addEventListener('load', handleLoad);

            // Schritt 4: Start
            xhr.send();

        }
        const processData = (data)=>{
            data.quetions.forEach(element => {
            const container = document.createElement('div');
            document.body.appendChild(container);

            const frage = document.createElement('h3');
            frage.innerHTML = el.quetions;
            container.appendChild(frage);
            el.answers.forEach(answer =>{
                
                const antwortEl = document.createElement('p');
                antwortEl.innerHTML = answer.antwort;
                container.appendChild(antwortEl);
                antwortEl.addEventListener('click', ()=>{
                    
                })
            })
            });
        }

        const init = () => {
            loadData();
        }

        init();
        //////////////////////////////////////////////////////////////////
        const handleLoad = evt => {
            if (evt.target.status == 200) {
                let data = JSON.parse(evt.target.responseText);
                console.log(data);
            } else {
                console.log(evt.target.statusText);
            }
        }

        const loadData = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', 'data/data.json');
            xhr.addEventListener('load', handleLoad);
            xhr.send();

        }

        const init = () => {
            loadData();
        }

        init();

        ////////////////////////////////////////////////////////////////
        const render = data => {

            // Alle Tags mit Namen "tee" heraussuchen
            const tees = Array.from(data.querySelectorAll('tee'));
            // console.log(tees);

            for ( let tee of tees ){
                let name = tee.querySelector('name');
                console.log(name.innerHTML.trim());

                let bewertung = tee.querySelector('bewertung');
                console.log(bewertung.innerHTML.trim());
                
                let bio = tee.getAttribute('bio');
                console.log('Bio: ', bio);
                
                console.log(' ');
            }

        }

        const handleLoad = evt => {
            if (evt.target.status == 200) {

                render(evt.target.responseXML);

            } else {
                console.log(evt.target.statusText);
            }
        }

        const loadData = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', 'data/data.xml');
            xhr.addEventListener('load', handleLoad);
            xhr.send();

        }

        const init = () => {
            loadData();
        }

        init();

        /////////////////////////////////////////////////////////////////
        
        const render = data => {

            // Alle Tags mit Namen "tee" heraussuchen
            const tees = Array.from(data.querySelectorAll('tee[bio="true"]'));
            // console.log(tees);

            for ( let tee of tees ){
                let name = tee.querySelector('name');
                console.log(name.innerHTML.trim());

                let bewertung = tee.querySelector('bewertung');
                console.log('Bewertung: ', bewertung.innerHTML.trim());
                
                let bio = tee.getAttribute('bio');
                console.log('Bio: ', bio);

                console.log(' ');
            }

        }

        const handleLoad = evt => {
            if (evt.target.status == 200) {

                render(evt.target.responseXML);

            } else {
                console.log(evt.target.statusText);
            }
        }

        const loadData = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', 'data/data.xml');
            xhr.addEventListener('load', handleLoad);
            xhr.send();

        }

        const init = () => {
            loadData();
        }

        init();
        ////////////////////////////////////////////////////////////////
        const render = data => {

            // Bei Zeilenumbruch trennen
            data = data.split('\r\n');

            // Alle Attribute entfernen, die nicht 'leerer String' sind
            data = data.filter(value => value != '');

            // Die einzelnen Zeilen zu Array wandeln und verarbeiten
            for (let i = 0; i < data.length; i++) {
                data[i] = data[i].split(';');
                data[i].splice(0, 1);
            }
            
            // Informationen zu dataArrayekten wandeln und in einem Array zusammentragen
            let dataArray = [];
            for (let i = 0; i < data[0].length; i++) {
                dataArray.push({
                    date: data[0][i],
                    umsatz: data[1][i],
                })
            }

            console.log(dataArray);
        }

        const handleLoad = evt => {
            if (evt.target.status == 200) {
                render(evt.target.responseText);
            } else {
                console.log(evt.target.statusText);
            }
        }

        const loadData = () => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', 'data/data.csv');
            xhr.addEventListener('load', handleLoad);
            xhr.send();

        }

        const init = () => {
            loadData();
        }

        init();

