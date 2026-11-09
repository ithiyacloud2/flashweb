import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap'
import React from 'react'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) =>
  RootLayout({
    config,
    children,
    importMap,
    serverFunction: async (args) => {
      'use server'
      return handleServerFunctions({
        ...args,
        config,
        importMap,
      })
    },
  })

export default Layout
