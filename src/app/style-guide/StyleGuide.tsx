"use client"

import Button from "@/components/Button"
import Tag from "@/components/tag"

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
             <Button size="large" variant="primary" label="disabled" disabled/>
                
             
            </div>
            </div>
            <div>
              <p className="pb-1">Secondary</p>
              <div className="flex gap-4">
              <Button size="large" variant="secondary" label="deafult1"/>
             <Button size="large" variant="secondary" label="disabled1" disabled/>
              
            </div>
          </div>
          </div>
        </div>
      </section>
         <section aria-labelledby="tags-heading">
        <h2 className="text-base font-semibold">Tags</h2>
        <div className="labelName flex-wrap border border-solid border-black inline-flex gap-2 max-w-2xs ">
       <Tag label="React"/>
       <Tag label="Next.js"/>
       <Tag label="TypeScript"/>
       <Tag label="Git"/>
       <Tag label="GitHub"/>
       <Tag label="JavaScript"/>
       <Tag label="HTML"/>
       <Tag label="CSS"/>
       <Tag label="Java"/>
       <Tag label="Python"/>

  </div>
</section>

      
    </div>
  )
  
}

