import './App.css'
import { Button } from './components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


function App() {

  return (
    <>
    <h1 className='mb-5'>Shadcn/UI components</h1>
    <div className='mb-5'>
      <Button>Primary</Button>
    </div>
    <div className='mb-5'>
      <Button variant="destructive">Destructive</Button>
    </div>
    <div className='mb-5'>
      <Button variant="secondary">Secondary</Button>
    </div>
    <div className='mb-5'>
      <Button variant="dipesh">Dipesh</Button>
    </div>
    <div className='mb-5'>
    <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
    </div>
    <div className='mb-5'>
    <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
    </div>
    </>
  )
}

export default App
