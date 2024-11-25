export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold">E3 Kenya</h3>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                Sisterherd Strong
              </p>
              <p className="text-sm font-medium text-primary">
                Encourage • Engage • Empower
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Email: info@e3kenya.org</p>
              <p>Location: Nairobi, Kenya</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex gap-4">
              {/* Social media links will go here */}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} E3 Kenya. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-primary hover:text-primary/80">
                Privacy Policy
              </button>
              <button className="text-sm font-medium text-primary hover:text-primary/80">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 