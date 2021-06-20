let heroes = JSON.parse(localStorage.getItem('heroes'))

window.addEventListener('load', e => {
    loadMarvel()
    loadDC()
})

window.onload = function () {
    let showHero = document.querySelector('#hero');
    showHero.addEventListener('show.bs.modal', function (e) {
        let btn = e.relatedTarget;
        let id = btn.getAttribute("data-bs-whatever");
        loadModal(id)
    })
}

function loadMarvel() {
    let marvel = heroes.filter(hero => hero.publisher == "Marvel Comics")
    document.querySelector('#mc-item').innerHTML = ''
    marvel.forEach(mc => {
        document.querySelector('#mc-item').innerHTML += `<div class="col-md-6 col-lg-4 col-xl-3">
                                                            <img class="d-sm-block mx-sm-auto img-fluid rounded img-thumbnail my-3"
                                                                    src=${mc.img} alt=${mc.superhero}>
                                                            <div class="d-grid ">
                                                                <button type="button" class="btn btn-outline-danger d-block mb-3" data-bs-toggle="modal"
                                                                    data-bs-target="#hero" data-bs-whatever=${mc.id}>
                                                                    <h1 class="text-center text-danger bg-dark rounded p-3">${mc.superhero}</h1>
                                                                </button>
                                                            </div>
                                                        </div>`
    })
}

function loadDC() {
    let dc = heroes.filter(hero => hero.publisher == "DC Comics")
    document.querySelector('#dc-item').innerHTML = ''
    dc.forEach(dcc => {
        document.querySelector('#dc-item').innerHTML += `<div class="col-md-6 col-lg-4 col-xl-3">
                                                            <img class="d-sm-block mx-sm-auto img-fluid rounded img-thumbnail my-3"
                                                                    src=${dcc.img} alt=${dcc.superhero}>
                                                            <div class="d-grid ">
                                                                <button type="button" class="btn btn-outline-info d-block mb-3" data-bs-toggle="modal"
                                                                    data-bs-target="#hero" data-bs-whatever=${dcc.id}>
                                                                    <h1 class="text-center text-info bg-dark rounded p-3">${dcc.superhero}</h1>
                                                                </button>
                                                            </div>
                                                        </div>`
    })
}

function loadModal(id) {
    let hero = heroes.find(hero => hero.id == id)
    document.querySelector('.modal-title').innerHTML = hero.superhero
    document.querySelector('.alter-ego').innerHTML = hero.alter_ego
    document.querySelector('.publisher').innerHTML = hero.publisher
    document.querySelector('.first-appearance').innerHTML = hero.first_appearance
    document.querySelector('.characters').innerHTML = hero.characters
    document.querySelector('.img-hero').innerHTML = `<img class="img-fluid rounded-circle img-thumbnail"
    src=${hero.img} alt=${hero.superhero}>`
}
