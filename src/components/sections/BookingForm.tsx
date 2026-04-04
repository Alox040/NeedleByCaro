"use client";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { site } from "@/content/site-content";

export function BookingForm() {
  return (
    <form
      className="space-y-5 rounded-forge border border-forge-border/55 bg-surface/30 p-6 md:p-8"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted">
          {site.booking.form.name}
        </label>
        <Input id="name" name="name" required autoComplete="name" placeholder="Vor- und Nachname" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted">
          {site.booking.form.email}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="du@beispiel.de"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted">
          {site.booking.form.phone}
        </label>
        <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+49 …" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted">
          {site.booking.form.message}
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Motiv, Stil, ungefähre Größe, Körperstelle …"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {site.booking.form.submit}
      </Button>
      <p className="text-xs text-muted/80">{site.booking.form.note}</p>
    </form>
  );
}
