const cardList = {
    'Magician of Black Chaos': 'https://static.wikia.nocookie.net/yugioh/images/0/06/MagicianofBlackChaos-SBTK-EN-UR-1E.png/revision/latest?cb=20191207202615',
    'Dark Magician Girl': 'https://static.wikia.nocookie.net/yugioh/images/9/96/DarkMagicianGirl-STAX-EN-C-1E.png/revision/latest?cb=20240216023835',
    'Dark Magician': 'https://static.wikia.nocookie.net/yugioh/images/a/ae/DarkMagician-STAX-EN-C-1E.png/revision/latest?cb=20240216022504',
    'Feueryarou [C]': 'https://static.wikia.nocookie.net/yugioh/images/f/fe/Fireyarou-AP08-EN-SP-UE.png/revision/latest/scale-to-width-down/300?cb=20151029022037',
    'Dunkle Energie [C]': 'https://static.wikia.nocookie.net/yugioh/images/9/9d/DarkEnergy-LOB-EN-C-UE.jpg/revision/latest?cb=20080226005531',
    'Laserkanone [C]': 'https://static.wikia.nocookie.net/yugioh/images/c/c3/LaserCannonArmor-LOB-EN-SP-UE.jpg/revision/latest?cb=20121004020907',
    'Silberpfeil und Bogen [C]': 'https://static.wikia.nocookie.net/yugioh/images/b/ba/SilverBowandArrow-LOB-NA-SP-1E.jpg/revision/latest/scale-to-width-down/300?cb=20090329054417',
    'Drachenschatz [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/36/DragonTreasure-LOB-NA-SP-UE-Reprint.png/revision/latest?cb=20150402180111',
    'Elektropeitsche [C]': 'https://static.wikia.nocookie.net/yugioh/images/f/fd/ElectroWhip-LOB-EN-C-UE.png/revision/latest?cb=20150222044436',
    'Mystischer Mond [C]': 'https://static.wikia.nocookie.net/yugioh/images/f/f3/MysticalMoon-YGLD-EN-C-1E.png/revision/latest?cb=20170813170319',
    'Maschinenumwandlungsfabrik [C]': 'https://static.wikia.nocookie.net/yugioh/images/8/8c/MachineConversionFactory-LOB-NA-SP-1E.png/revision/latest?cb=20150203142407',
    'Körpertemperatur erhöhen [C]': 'https://static.wikia.nocookie.net/yugioh/images/9/97/RaiseBodyHeat-LOB-NA-SSP-1E.jpg/revision/latest?cb=20090329054631',
    'Folge dem Wind [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/42/FollowWind-LOB-EN-SSP-UE.jpg/revision/latest?cb=20120807034903',
    'Stachelseedra [C]': 'https://static.wikia.nocookie.net/yugioh/images/5/52/SpikeSeadra-LOB-NA-C-1E.jpg/revision/latest?cb=20090329054846',
    'Stolperdrahtbestie [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/3c/TripwireBeast-LOB-NA-C-1E.jpg/revision/latest?cb=20090329054905',
    'Roter Totenkopfvogel [C]': 'https://static.wikia.nocookie.net/yugioh/images/f/f7/SkullRedBird-LOB-NA-C-1E.jpg/revision/latest?cb=20090329054922',
    'Misairuzame [C]': 'https://static.wikia.nocookie.net/yugioh/images/b/b0/Misairuzame-LOB-NA-C-1E.jpg/revision/latest?cb=20090329055129',
    'Stahl-Oger Grotte #1 [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/30/SteelOgreGrotto1-LOB-NA-C-1E.jpg/revision/latest?cb=20090329055229',
    'Geringerer Drache [C]': 'https://static.wikia.nocookie.net/yugioh/images/6/68/LesserDragon-LOB-EN-C-UE.png/revision/latest?cb=20150222045906',
    'Finsterdornen [C]': 'https://static.wikia.nocookie.net/yugioh/images/e/e7/DarkworldThorns-LOB-NA-C-1E.jpg/revision/latest?cb=20090329055257',
    'Schleimechse [C]': 'https://static.wikia.nocookie.net/yugioh/images/2/2b/DroolingLizard-LOB-NA-C-UE.png/revision/latest?cb=20150203180926',
    'Panzerseestern [C]': 'https://static.wikia.nocookie.net/yugioh/images/7/73/ArmoredStarfish-LOB-EN-C-UE.png/revision/latest?cb=20150520142931',
    'Succubus-Ritter [C]': 'https://static.wikia.nocookie.net/yugioh/images/5/54/SuccubusKnight-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240820191007',
    'Totenkopfdiener [C]': 'https://static.wikia.nocookie.net/yugioh/images/b/b4/SkullServant-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240726172132',
    'Basisinsekt [C]': 'https://static.wikia.nocookie.net/yugioh/images/1/13/BasicInsect-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240730172357',
    'Silberfang [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/3f/SilverFang-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240730213412',
    'Dunkelgrau [C]': 'https://static.wikia.nocookie.net/yugioh/images/d/d7/DarkGray-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240731171553',
    'Nemuriko [C]': 'https://static.wikia.nocookie.net/yugioh/images/e/ef/Nemuriko-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815105210',
    'Das 13. Grab [C]': 'https://static.wikia.nocookie.net/yugioh/images/e/ef/The13thGrave-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815105744',
    'Flammen-Manipulator [C]': 'https://static.wikia.nocookie.net/yugioh/images/a/a5/FlameManipulator-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815131645',
    'Monster-Ei [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/41/MonsterEgg-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815132437',
    'Feuergras [C]': 'https://static.wikia.nocookie.net/yugioh/images/5/59/Firegrass-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815184201',
    'Dunkler König des Abgrunds [C]': 'https://static.wikia.nocookie.net/yugioh/images/6/60/DarkKingoftheAbyss-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816105050',
    'Unterweltlerreflektion #2 [C]': 'https://static.wikia.nocookie.net/yugioh/images/7/70/FiendReflection2-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816132536',
    'Turtle-Tiger [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/40/TurtleTiger-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816185211',
    'Kleiner Drache [C]': 'https://static.wikia.nocookie.net/yugioh/images/0/06/PetitDragon-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821110907',
    'Hinotama-Seele [C]': 'https://static.wikia.nocookie.net/yugioh/images/2/2a/HinotamaSoul-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816185928',
    'Kagemuscha der blauen Flamme [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/46/KagemushaoftheBlueFlame-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821130631',
    'Zweischnäuziger dunkler Herrscher [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/4e/TwoMouthDarkruler-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821181350',
    'Steinschmelzer [C]': 'https://static.wikia.nocookie.net/yugioh/images/c/c5/Dissolverock-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821181625',
    'Tiefenwasser [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/4f/RootWater-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240822110008',
    'Wütender Meereskönig [C]': 'https://static.wikia.nocookie.net/yugioh/images/6/6e/TheFuriousSeaKing-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240824152248',
    'Grüner Phantomkönig [C]': 'https://static.wikia.nocookie.net/yugioh/images/c/c7/GreenPhantomKing-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20241025232722',
    'Strahl und Temperatur [C]': 'https://static.wikia.nocookie.net/yugioh/images/1/19/RayTemperature-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20241027183424',
    'Nebelkönig [C]': 'https://static.wikia.nocookie.net/yugioh/images/d/df/KingFog-LOB-EN-C-UE.png/revision/latest?cb=20150929041225',
    'Schwert der Legende [C]': 'https://static.wikia.nocookie.net/yugioh/images/6/64/LegendarySword-SS02-EN-C-1E.png/revision/latest?cb=20190129174242',
    'Reißzähne [C]': 'https://static.wikia.nocookie.net/yugioh/images/b/bc/BeastFangs-LOB-NA-SP-UE-Reprint.png/revision/latest?cb=20170322141232',
    'Lila Kristall [C]': 'https://static.wikia.nocookie.net/yugioh/images/0/0b/VioletCrystal-SBLS-EN-C-1E.png/revision/latest?cb=20190509231530',
    'Buch der geheimen Künste [C]': 'https://static.wikia.nocookie.net/yugioh/images/b/bb/BookofSecretArts-LOB-EU-SP-UE-Reprint.png/revision/latest?cb=20171228022533',
    'Wald [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/37/Forest-SS03-EN-C-1E.png/revision/latest?cb=20200404204040',
    'Ödland [C]': 'https://static.wikia.nocookie.net/yugioh/images/5/5f/Wasteland-SBLS-EN-C-1E.png/revision/latest?cb=20190509231729',
    'Sogen [C]': 'https://static.wikia.nocookie.net/yugioh/images/9/90/Sogen-SS02-EN-C-1E.png/revision/latest?cb=20190129175840',
    'Umi [C]': 'https://static.wikia.nocookie.net/yugioh/images/9/99/Umi-SBC1-EN-C-1E.png/revision/latest?cb=20230919000443',
    'Yami [C]': 'https://static.wikia.nocookie.net/yugioh/images/7/79/Yami-SS01-EN-C-1E.png/revision/latest?cb=20190129195218',
    'Rote Medizin [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/3e/RedMedicine-YSD-EN-C-1E.png/revision/latest?cb=20160515211710',
    'Funken [C]': 'https://static.wikia.nocookie.net/yugioh/images/e/e1/Sparks-LOB-EN-C-UE.png/revision/latest?cb=20140825155358',
    'Falle entfernen [C]': 'https://static.wikia.nocookie.net/yugioh/images/9/9a/RemoveTrap-LOB-EN-C-UE.png/revision/latest?cb=20160527203736',
    'Tyhone [C]': 'https://static.wikia.nocookie.net/yugioh/images/1/13/Tyhone-LOB-NA-C-1E.jpg/revision/latest?cb=20090329052031',
    'Uraby [C]': 'https://static.wikia.nocookie.net/yugioh/images/6/65/Uraby-SS03-EN-C-1E.png/revision/latest?cb=20200404210013',
    'Gewitztes Phantom [C]': 'https://static.wikia.nocookie.net/yugioh/images/5/5f/WittyPhantom-LOB-EN-C-UE.jpg/revision/latest?cb=20171026182158',
    'Harte Rüstung [C]': 'https://static.wikia.nocookie.net/yugioh/images/e/e6/HardArmor-LOB-NA-C-1E.png/revision/latest?cb=20151004141818',
    'Menschenfresser [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/43/ManEater-LOB-NA-C-1E.jpg/revision/latest?cb=20090329052727',
    'Armaill [C]': 'https://static.wikia.nocookie.net/yugioh/images/4/42/Armaill-LOB-EN-C-UE-25thAnniversaryEdition.png/revision/latest?cb=20240802231341',
    'Schrecklicher Terra [C]': 'https://static.wikia.nocookie.net/yugioh/images/e/e5/TerratheTerrible-LOB-NA-C-1E.jpg/revision/latest?cb=20090329053137',
    'Kumootoko [C]': 'https://static.wikia.nocookie.net/yugioh/images/1/18/Kumootoko-SS03-EN-C-1E.png/revision/latest?cb=20200404204752',
    'Meda-Bat [C]': 'https://static.wikia.nocookie.net/yugioh/images/1/1c/MedaBat-LOB-EN-C-UE.png/revision/latest?cb=20140825154701',
    'Bezaubernde Nixe [C]': 'https://static.wikia.nocookie.net/yugioh/images/3/3e/EnchantingMermaid-OP03-EN-SP-UE.png/revision/latest?cb=20170330113642',
    'Abscheuliche Keime [C]': 'https://static.wikia.nocookie.net/yugioh/images/6/6f/VileGerms-LOB-NA-SP-UE-Reprint.png/revision/latest?cb=20161117194843',
    'Spalt [R]': 'https://static.wikia.nocookie.net/yugioh/images/b/b8/Fissure-SDGR-EN-C-1E.png/revision/latest?cb=20141016191745',
    'Zweiklauen-Angriff [R]': 'https://static.wikia.nocookie.net/yugioh/images/2/2e/TwoProngedAttack-LOB-EN-R-UE.jpg/revision/latest?cb=20080827044339',
    'Sensenmann der Karten [R]': 'https://static.wikia.nocookie.net/yugioh/images/6/62/ReaperoftheCards-LOB-EN-R-UE.png/revision/latest?cb=20140825154905',
    'Harfengeist [R]': 'https://static.wikia.nocookie.net/yugioh/images/b/b5/SpiritoftheHarp-STAS-EN-C-1E.png/revision/latest?cb=20240216003933',
    'Verteidigung stoppen [R]': 'https://static.wikia.nocookie.net/yugioh/images/d/dd/StopDefense-DB1-EN-C-UE.png/revision/latest?cb=20141220050545',
    'Kobolds letzte Rettung [R]': 'https://static.wikia.nocookie.net/yugioh/images/9/90/GoblinsSecretRemedy-LOB-EN-R-UE.png/revision/latest?cb=20141213141556',
    'Ewige Flamme [R]': 'https://static.wikia.nocookie.net/yugioh/images/e/e6/FinalFlame-LOB-EN-R-UE.jpg/revision/latest?cb=20070330222108',
    'Metalldrache [R]': 'https://static.wikia.nocookie.net/yugioh/images/b/b6/MetalDragon-LOB-EN-R-UE.png/revision/latest?cb=20141213141749',
    'Bewaffneter Ninja [R]': 'https://static.wikia.nocookie.net/yugioh/images/b/bb/ArmedNinja-DL13-EN-R-UE-Blue.jpg/revision/latest?cb=20120225210910',
    'Blumenwolf [R]': 'https://static.wikia.nocookie.net/yugioh/images/7/77/FlowerWolf-LOB-EN-R-UE.png/revision/latest?cb=20131207082729',
    'Feuerritter Charubin [R]': 'https://static.wikia.nocookie.net/yugioh/images/a/a6/CharubintheFireKnight-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240815110521',
    'Dunkler Feuerdrache [R]': 'https://static.wikia.nocookie.net/yugioh/images/8/89/DarkfireDragon-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240816104247',
    'Aqua Madoor [R]': 'https://static.wikia.nocookie.net/yugioh/images/7/74/AquaMadoor-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821112359',
    'Flammengeist [R]': 'https://static.wikia.nocookie.net/yugioh/images/8/8b/FlameGhost-LOB-EN-R-UE-25thAnniversaryEdition.png/revision/latest?cb=20240821131131',
    'Drachenfanggefäß [R]': 'https://static.wikia.nocookie.net/yugioh/images/2/2f/DragonCaptureJar-LCYW-EN-R-1E.png/revision/latest?cb=20121006005432',
    'Leichenfledderer [R]': 'https://static.wikia.nocookie.net/yugioh/images/6/6e/GravediggerGhoul-LOB-EN-R-UE.jpg/revision/latest?cb=20070104192633',
    'Riesen-Steinsoldat [R]': 'https://static.wikia.nocookie.net/yugioh/images/0/02/GiantSoldierofStone-STAX-EN-C-1E.png/revision/latest?cb=20240216022204',
    'Schwarzes Loch [SR]': 'https://static.wikia.nocookie.net/yugioh/images/7/77/DarkHole-STAS-EN-C-1E.png/revision/latest?cb=20240216005915',
    'Raigeki [SR]': 'https://static.wikia.nocookie.net/yugioh/images/c/c0/Raigeki-SDBT-EN-C-1E.png/revision/latest?cb=20230505010146',
    'Fallgrube [SR]': 'https://static.wikia.nocookie.net/yugioh/images/0/0a/TrapHole-SDBT-EN-C-1E.png/revision/latest?cb=20230505010407',
    'Polymerisation [SR]': 'https://static.wikia.nocookie.net/yugioh/images/3/36/Polymerization-RA02-EN-SR-1E.png/revision/latest?cb=20240703233831',
    'Mystische Elfe [SR]': 'https://static.wikia.nocookie.net/yugioh/images/2/2b/MysticalElf-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240802232602',
    'Drachenfluch [SR]': 'https://static.wikia.nocookie.net/yugioh/images/e/e1/CurseofDragon-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240819133340',
    'Verräterische Schwerter [SR]': 'https://static.wikia.nocookie.net/yugioh/images/1/1c/SwordsofRevealingLight-EGS1-EN-C-1E.png/revision/latest?cb=20220707044803',
    'Menschenfresserkäfer [SR]': 'https://static.wikia.nocookie.net/yugioh/images/9/90/ManEaterBug-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240822190408',
    'Keltischer Wächter [SR]': 'https://static.wikia.nocookie.net/yugioh/images/a/a8/CelticGuardian-LOB-EN-SR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240729171559',
    'Blauäugiger w. Drache [UR]': 'https://cdn.formatlibrary.com/images/cards/89631139.jpg',
    'Dunkler Magier [UR]': 'https://static.wikia.nocookie.net/yugioh/images/a/ae/DarkMagician-STAX-EN-C-1E.png/revision/latest?cb=20240216022504',
    'Gaia, zorniger Ritter [UR]': 'https://static.wikia.nocookie.net/yugioh/images/d/d9/GaiaTheFierceKnight-LOB-EN-UR-UE-25thAnniversaryEdition.png/revision/latest?cb=20240729170051',
    'Rotäugiger blauer Drache [UR]': 'https://images.ygoprodeck.com/images/cards/74677422.jpg',
    'Wiedergeburt [UR]': 'https://static.wikia.nocookie.net/yugioh/images/4/40/MonsterReborn-EGO1-EN-C-1E.png/revision/latest?cb=20210920164521',
    'Rechtes Bein der Verbotenen [UR]': 'https://cdn.formatlibrary.com/images/cards/8124921.jpg',
    'Linkes Bein der Verbotenen [UR]': 'https://cdn.formatlibrary.com/images/cards/44519536.jpg',
    'Rechter Arm der Verbotenen [UR]': 'https://cdn.formatlibrary.com/images/cards/70903634.jpg',
    'Linker Arm der Verbotenen [UR]': 'https://cdn.formatlibrary.com/images/cards/7902349.jpg',
    'Exodia, die Verbotene [UR]': 'https://cdn.formatlibrary.com/images/cards/33396948.jpg',
    'Drachenmeister Gaia [SCR]': 'https://images.ygoprodeck.com/images/cards/66889139.jpg',
    'Dreihörniger Drache [SCR]': 'https://images.ygoprodeck.com/images/cards/39111158.jpg',
};

function getRandomEntries(amount) {
    const imageKeys = [];

    for (i=0; i<amount; i++) {
        const keys = Object.keys(cardList);
        let index = Math.floor(Math.random()*keys.length);
        imageKeys[i] = keys[index];
    }

    return imageKeys;
}

function changeImages(imageKeys) {
    let i = 0;
    for(let imageKey of imageKeys) {
        i++;
        let elementId = 'card' + i;

        let cardElement = document.getElementById(elementId);
        let imageTag = cardElement.getElementsByTagName('img')[0];
        imageTag.src = cardList[imageKey];
        imageTag.alt = imageKey;
    }
}

function fadeInOut(amount) {
    console.log('fade in/out');

    let i = 1;
    let interval= null;

    interval = setInterval(
        () => {
            if (i > amount) {
                clearInterval(interval);
                return;
            }
            let elementId = 'card' + i;
            let cardElement = document.getElementById(elementId);
            removeHideClass(cardElement);

            let cardName = cardElement.getElementsByTagName('img')[0].alt;
            console.log(cardName);
            if (!cardName.includes('[C]')) {
                let effect = cardElement.getElementsByClassName('effect')[0];
                removeHideClass(effect);
            }
            i++;
        },
        3000,
    );
}

function reset(amount) {
    for (let i=1; i<=amount; i++) {
        let elementId = 'card' + i;
        let cardElement = document.getElementById(elementId);
        cardElement.classList.add('hide');
        cardElement.getElementsByClassName('effect')[0].classList.add('hide');
    }
}

function removeHideClass(element) {
    while (element.classList.contains('hide')) {
        element.classList.remove('hide');
    }

    console.log(element.className, element.classList);
}

(() => {
    document.getElementById('trigger').addEventListener('click', () => {
        const amount = 5;
        const isHidden = document.getElementById('card1').classList.contains('hide');

        reset(amount);

        if (isHidden) {
            const entryKeys = getRandomEntries(amount);
            changeImages(entryKeys);
        }
        fadeInOut(amount);

        reset(amount);
        let interval = setInterval(
            () => {
                reset(amount);
                clearInterval(interval);
            },
            amount*4000,
        );
    });
})();