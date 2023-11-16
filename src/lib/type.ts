export interface navbarInterface {
  section: (arg: string) => void;
}

interface Bak {
  idBak: number;
  suhu: number;
}

interface Rak {
  idRak: number;
  bak: Bak[];
}

export interface homeCardInterface {
  id: number;
  name: string;
  status: string;
  TimerOff?: number;
  TimerOn?: number;
  rak: Rak[];
}
