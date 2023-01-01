import React from "react"

interface gifObject {
  title: string; id: string;
  url: string;
}

export default function Gif({ title, id, url }: gifObject) {

  return <div>
    <h4>{title}</h4>
    <p><small>{id}</small></p>
    <img alt="" src={url} />
  </div>
}