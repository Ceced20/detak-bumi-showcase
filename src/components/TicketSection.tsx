
import React from "react";
import { Ticket, Calendar, Phone } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TicketSection = () => {
  return (
    <section id="tickets" className="py-20 bg-gradient-to-r from-gray-100 to-nbdk-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Ticket Information</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/90 border-nbdk-green/20 shadow-xl">
            <CardHeader className="bg-nbdk-green/10 border-b border-nbdk-green/20">
              <CardTitle className="flex items-center gap-3 text-nbdk-blue-dark">
                <Ticket className="h-6 w-6 text-nbdk-green" />
                <span>Tiket khusus untuk</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-nbdk-blue-dark mb-4">
                <Calendar className="h-5 w-5 text-nbdk-green" />
                <span className="font-bold">Hari Rabu, 28 Mei 2025</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">💎</span>
                    <div>
                      <p className="font-bold">VIP</p>
                      <p className="text-nbdk-blue-dark/80">Rp. 500.000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-xl">✨</span>
                    <div>
                      <p className="font-bold">Kelas 1</p>
                      <p className="text-nbdk-blue-dark/80">Rp. 350.000</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🔹</span>
                    <div>
                      <p className="font-bold">Kelas 2</p>
                      <p className="text-nbdk-blue-dark/80">Rp. 250.000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🔸</span>
                    <div>
                      <p className="font-bold">Kelas 3</p>
                      <p className="text-nbdk-blue-dark/80">Rp. 150.000</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-nbdk-green mt-1" />
                  <div>
                    <p className="font-bold mb-2">Info dan Pemesanan Tiket:</p>
                    <p className="text-nbdk-blue-dark/80">0816 868 615 | 0816 868 671</p>
                    <p className="text-nbdk-blue-dark/80">0822 2111 8589 | 0822 2111 8389</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-nbdk-green/10 rounded-lg border border-nbdk-green/20 text-center">
                <p className="text-nbdk-blue-dark font-medium">
                  Mari hadir dan hayati Napas Bumi, Detak Kehidupan bersama kami.
                </p>
                <p className="text-nbdk-blue-dark/80 text-sm mt-2">
                  Pembelian Tiket hanya berlaku untuk hari Rabu, 28 Mei 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
