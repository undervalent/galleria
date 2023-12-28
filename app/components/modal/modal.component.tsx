import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import ExpandIcon from '~/assets/shared/icon-view-image.svg'

import styles from './modal.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
];

export function Modal({image}:{image: string}) {

  return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
        <button className="modal__trigger">
        <img src={ExpandIcon} alt="open in modal" />
          View image
        </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="modal__overlay" />
        <Dialog.Content className="modal__content">
          <img src={image} alt="" className="modal__image"/>
        <Dialog.Close asChild>
          <button className="modal__close" aria-label="Close">
            Close
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>

  )
}
