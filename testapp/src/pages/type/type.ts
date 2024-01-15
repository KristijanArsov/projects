export interface WeatherType {
    id: number;
    name: string;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
    };
  }
  
  