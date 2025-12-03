#!/usr/bin/env node

import { readdirSync, cpSync } from 'fs'
import { join } from 'path'

const srcDir = join(process.cwd(), 'src')
const templateDir = join(srcDir, '*template')

// Get all directories in src/ that are numbers
const entries = readdirSync(srcDir, { withFileTypes: true })
const numberDirs = entries
  .filter(entry => entry.isDirectory() && /^\d+$/.test(entry.name))
  .map(entry => parseInt(entry.name, 10))

// Find the next number
const nextNumber = numberDirs.length > 0 ? Math.max(...numberDirs) + 1 : 1

// Format with zero-padding (at least 2 digits)
const nextNumberPadded = String(nextNumber).padStart(2, '0')

const newDir = join(srcDir, nextNumberPadded)

// Copy the template
cpSync(templateDir, newDir, { recursive: true })

console.log(`Created new day folder: src/${nextNumberPadded}`)
