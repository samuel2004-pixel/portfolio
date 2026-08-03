"use client";

export default function SectionTitle({

title,

subtitle,

}:{

title:string;

subtitle:string;

}){

return(

<>

<p className="uppercase tracking-[0.45em] text-sm text-neutral-400">

{subtitle}

</p>

<h2 className="mt-6 text-6xl md:text-8xl font-semibold tracking-[-0.06em]">

{title}

</h2>

</>

);

}