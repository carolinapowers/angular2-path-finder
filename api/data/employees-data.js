var employees= [
        {
            "id": 1,
            "name": "Andres, Joel",
            "floor": 1,
            "locations":[
                { "lon": 28.9, "lat": 53.0, "name": "Andres, Joel", "dir": -1 }
            ],
            "steps": [
                { "lon": 32.6, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 32.1, "lat": 53.95, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 29.6, "lat": 53.95, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 29.2, "lat": 53.7, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 29.4, "lat": 53.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 28.9, "lat": 53.0, "size": 60000, "dir": -1, "group": 1 }
            ]
        },
        {
            "id": 2,
            "name": "Powers, Carolina",
            "floor": 1,
            "locations":[
                { "lon": 24.0, "lat": 55.0, "name": "Kowno" },
                { "lon": 25.3, "lat": 54.7, "name": "Wilna" },
                { "lon": 26.4, "lat": 54.4, "name": "Smorgoni", "dir": -1 },
                { "lon": 26.8, "lat": 54.3, "name": "Molodexno", "dir": -1 },
                { "lon": 27.7, "lat": 55.2, "name": "Gloubokoe" },
                { "lon": 27.6, "lat": 53.9, "name": "Minsk", "dir": -1 },
                { "lon": 28.5, "lat": 54.3, "name": "Studienska", "dir": -1 },
                { "lon": 28.7, "lat": 55.5, "name": "Polotzk" },
                { "lon": 29.2, "lat": 54.4, "name": "Bobr", "dir": -1 },
                { "lon": 30.2, "lat": 55.3, "name": "Witebsk" },
                { "lon": 30.4, "lat": 54.5, "name": "Orscha", "dir": -1 },
                { "lon": 30.4, "lat": 53.9, "name": "Mohilow", "dir": -1 },
                { "lon": 32.0, "lat": 54.8, "name": "Smolensk" },
                { "lon": 33.2, "lat": 54.9, "name": "Dorogobouge" },
                { "lon": 34.3, "lat": 55.2, "name": "Wixma", "dir": -1 },
                { "lon": 34.4, "lat": 55.5, "name": "Chjat" },
                { "lon": 36.0, "lat": 55.5, "name": "Mojaisk" },
                { "lon": 37.6, "lat": 55.8, "name": "Moscou" },
                { "lon": 36.6, "lat": 55.3, "name": "Tarantino", "dir": -1 },
                { "lon": 36.5, "lat": 55.0, "name": "Malo-jarosewli", "dir": -1 }
            ],
            "steps": [
                { "lon": 24.0, "lat": 54.9, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 24.5, "lat": 55.0, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 25.5, "lat": 54.6, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 26.0, "lat": 54.7, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 27.0, "lat": 54.8, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 28.0, "lat": 54.9, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 28.5, "lat": 55.0, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 29.0, "lat": 55.1, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 30.0, "lat": 55.2, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 30.3, "lat": 55.3, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 32.0, "lat": 54.8, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 33.2, "lat": 54.9, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 34.4, "lat": 55.5, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 35.5, "lat": 55.4, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 36.0, "lat": 55.5, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 37.6, "lat": 55.8, "size": 60000, "dir": 1, "group": 1 },
                { "lon": 37.65, "lat": 55.65, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 37.45, "lat": 55.62, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 37.0, "lat": 55.0, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 36.8, "lat": 55.0, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 35.4, "lat": 55.3, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 34.3, "lat": 55.2, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 33.3, "lat": 54.8, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 32.0, "lat": 54.6, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 30.4, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 29.2, "lat": 54.3, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 29.13, "lat": 54.29, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 28.5, "lat": 54.2, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 28.3, "lat": 54.3, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 26.8, "lat": 54.3, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 26.8, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 25.0, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 24.4, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 24.2, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 },
                { "lon": 24.1, "lat": 54.4, "size": 60000, "dir": -1, "group": 1 }
            ]
        }
    ]

module.exports = employees;