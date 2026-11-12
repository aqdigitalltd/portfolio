"use client"

import Button from "@/components/Button"

export default function StyleGuide() {
  return (
    <div className="mx-auto max-w-site p-8">
      <h1 className="text-section font-semibold tracking-display">
        Style guide lives here
      </h1>

      <section aria-labelledby="buttons-heading" className="mt-16">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="mt-6">
          <div className="mt-5 flex flex-col gap-4">
            <div>
              <p className="pb-1">Primary</p>
              <div className="flex gap-4">
                <Button size="large" variant="primary" label="deafult" />
                <Button
                  size="large"
                  variant="primary"
                  label="disabled"
                  disabled
                />
              </div>
            </div>
            <div>
              <p className="pb-1">Secondary</p>
              <div className="flex gap-4">
                <Button size="large" variant="secondary" label="deafult1" />
                <Button size="large" variant="secondary" label="disabled1" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
