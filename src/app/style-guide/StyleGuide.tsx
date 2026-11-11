"use client";

import Button from "@/components/Button";

export default function StyleGuide() {
  return (
    <div className="mx-auto max-w-site p-8">
      <h1 className="text-section font-semibold tracking-display">
        Style guide
      </h1>

      <section aria-labelledby="buttons-heading" className="mt-16">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="mt-6">
          <div className="mt-5 flex flex-col gap-2">
            <div>
              <p className="pb-1">Primary</p>
              <Button size="large" variant="primary">
                Primary
              </Button>
            </div>
            <div>
              <p className="pb-1">Secondary</p>

              <Button size="large" variant="secondary">
                Secondary
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
