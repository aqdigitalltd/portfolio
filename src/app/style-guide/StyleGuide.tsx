"use client"
import Button from "@/components/Button"
import Tag from "@/components/tag"

export default function StyleGuide() {
  const tags = [
    'React',
    'Next.js',
    'TypeScript',
    'Git',
    'GitHub',
    'JavaScript',
    'HTML',
    'CSS',
    'Java',
    'Python',
  ]

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
                <Button
                  size="large"
                  variant="secondary"
                  label="disabled1"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="tags-heading">
        <h2 className="text-base font-semibold">Tags</h2>
        <div className="labelName flex-wrap border border-solid border-black inline-flex gap-2 max-w-2xs ">
         {tags.map(label => (
       <Tag key={label} label={label} />
          )
        )
          }
        </div>
      </section>
    </div>
  )
}
