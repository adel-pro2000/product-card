// Задание №3. Cоздать структуру на ваш выбор, как было показано в лекции 
// (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру 
// и реализуйте наследуемость классов

class MotorOil {
  constructor(brand, viscosity, packaging) {
    this.brand = brand;
    this.viscosity = viscosity;
    this.packaging = packaging;
  }

  showInfo() {
    console.log(`Brand: ${this.brand}, Viscosity: ${this.viscosity}, Packaging: ${this.packaging}`);
  }
}

class GearOil extends MotorOil {
  constructor(brand, viscosity, packaging, gearType) {
    super(brand, viscosity, packaging);
    this.gearType = gearType;
  }

  showgearType() {
    console.log(`Gear Type: ${this.gearType}`);
  }
}

const motorOilMobil = new MotorOil("Mobil", "5W-30", "1L");
const motorOilShell = new MotorOil("Shell", "10W-40", "4L");
const gearOilCastrol = new GearOil("Castrol", "75W-90", "1L", "Manual");
const gearOilValvoline = new GearOil("Valvoline", "80W-90", "4L", "Automatic");

motorOilMobil.showInfo();
motorOilShell.showInfo();
gearOilCastrol.showInfo();
gearOilCastrol.showgearType();
gearOilValvoline.showInfo();
gearOilValvoline.showgearType();