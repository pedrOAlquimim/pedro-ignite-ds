import { colors } from '@pedro-ignite-ds/tokens'
import { getContrast } from 'polished'
import React from 'react'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        style={{
          padding: '2rem',
          backgroundColor: color,
          display: 'flex',
          justifyContent: 'space-between',
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    )
  })
}
