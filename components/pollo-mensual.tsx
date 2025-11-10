"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function PolloMensual() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm text-foreground transition-colors px-3 py-1 rounded-md hover:bg-transparent hover:border hover:border-primary hover:text-primary font-open-sans">
          Pollo mensual
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold font-anton">Te invita a:</DialogTitle>
          <DialogDescription className="text-center text-lg font-open-sans">
            Aportar al pollo mensual
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center">
          <div className="flex justify-center mb-4">
            <Image src="/images/perros2.jpeg" alt="Moneypool" width={150} height={150} />
          </div>
          <p className="text-lg font-semibold font-open-sans">💳 Paga fácil y seguro con Moneypool</p>
          <p className="text-muted-foreground font-open-sans">✅ Usado por +1,000,000 mexicanos</p>
          <p className="text-muted-foreground font-open-sans">🔒 Tus datos están protegidos</p>
          <p className="text-muted-foreground font-open-sans">💸 Solo tarjetas - sin compartir cuentas</p>
        </div>
        <DialogFooter>
          <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
            <Link href="https://www.moneypool.mx/p/aQHEnS0" target="_blank">
              Donar ahora
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
