class Job {
    name;
    status = {
        hp: null,
        atk: null,
        spd: null,
        int: null,
        luk: null,
    };

    constructor(jobName, hp, atk, spd, int, luk) {
        this.name = jobName;
        this.status.hp = hp;
        this.status.atk = atk;
        this.status.spd = spd;
        this.status.int = int;
        this.status.luk = luk;
    }
}

class Nature {
    name;
    statusCorrection = {
        hp: 1.0,
        atk: 1.0,
        spd: 1.0,
        int: 1.0,
        luk: 1.0,
    };

    constructor(natureName, hp, atk, spd, int, luk) {
        this.name = natureName;
        this.statusCorrection.hp = hp;
        this.statusCorrection.atk = atk;
        this.statusCorrection.spd = spd;
        this.statusCorrection.int = int;
        this.statusCorrection.luk = luk;
    }
}

const gender = {
    male : 'おとこ',
    female : 'おんな',
}

const jobs = {
    warrior : new Job('せんし', 750, 150, 80, 50, 80),
    hero : new Job('ゆうしゃ', 500, 120, 120, 120, 120),
    wizard : new Job('まほうつかい', 300, 50, 110, 160, 100),
}

const natures = {
    serious: new Nature('まじめ', 1, 1, 1, 1, 1),
    hasty: new Nature('せっかち', 1, 1, 1.4, 1, 1),
}

const images = {
    male: {
        warrior: "resource/warrior_male.png",
        hero: "resource/yuusya_male.png",
        wizard: "resource/wizard_male.png",
    },
    female: {
        warrior: "resource/warrior_female.png",
        hero: "resource/yuusya_female.png",
        wizard: "resource/wizard_female.png",
    }
}

var vm = new Vue({
    el: ".game-maker",
    data: function() {
        return {
            nameText: 'sample',
            gender: gender,
            pickedGender: 'male',
            jobs: jobs,
            selectedJob: 'warrior',
            selectedNature: 'serious',
            images: images,
        }
    },
    methods: {
        getNatures() {
            let naturesArr = Object.assign({}, natures);
            if (this.pickedGender == 'male') naturesArr["quirky"] = new Nature('きまぐれ', 1, 1, 1, 1, 1.5);
            if (this.pickedGender == 'female') naturesArr["tomboy"] = new Nature('おてんば', 1, 1.1, 1.1, 1, 1);
            if (this.selectedJob == 'hero') naturesArr["brave"] = new Nature('ゆうかん', 1, 1.1, 1.1, 1, 1.2);

            return naturesArr;
        }
    }
})