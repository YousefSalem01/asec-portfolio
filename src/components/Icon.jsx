import {
  Building2, Cpu, Droplets, Factory, Flame, FlaskConical, HardHat, HeartPulse, Mountain,
  Route, Server, Sun, TrainFront, Wrench, Zap,
} from 'lucide-react'

// Icons referenced by name from the data files.
const icons = {
  Building2, Cpu, Droplets, Factory, Flame, FlaskConical, HardHat, HeartPulse, Mountain,
  Route, Server, Sun, TrainFront, Wrench, Zap,
}

export default function Icon({ name, size = 24, ...rest }) {
  const Cmp = icons[name] || Zap
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" {...rest} />
}
