/*
 * Copyright (c) 2018-2020 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

import axios from 'axios';

export async function fetchBranding(url: string): Promise<any> {

  try {
    const response = await axios.get<any>(url);
    return response.data;
  } catch (e) {
    throw new Error(`Failed to fetch branding data by URL: ${url}`);
  }

}
