/*
 * Copyright (C) 2018 Matus Zamborsky
 * This file is part of Cyano Wallet.
 *
 * Cyano Wallet is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Cyano Wallet is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Cyano Wallet.  If not, see <http://www.gnu.org/licenses/>.
 */
import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Spacer, StatusBar, TrezorLogo, View } from '../../../components';

export interface Props {
  supported: boolean;
  handleCancel: () => void;
  handleCreate: () => void;
  handleImport: () => void;
}

export const TrezorSignupView: React.SFC<Props> = (props) => (
  <View orientation="column" fluid={true} className="gradient">
    <TrezorLogo />
    {props.supported ? (
      <>
        <View orientation="column" className="hint">
          <View>To start using Ontology</View>
          <View>use your Trezor</View>
        </View>
        <View orientation="column" fluid={true} content={true}>
          <View orientation="column" fluid={true} className="center signButtons">
            <Spacer />
            <Button size="small" onClick={props.handleCreate}>New account</Button>
            <Spacer />
            <Button size="small" onClick={props.handleCancel}>Cancel</Button>
          </View>
        </View>
      </>
    ) : (
      <>
        <View orientation="column" className="hint">
          <View>Connect your Trezor</View>
          <View>and start Trezor Bridge</View>
        </View>
        <View orientation="column" fluid={true} content={true}>
          <View orientation="column" fluid={true} className="center signButtons">
            <Spacer />
            <Button size="small" onClick={props.handleCancel}>Cancel</Button>
          </View>
        </View>
      </>
    )}
    <StatusBar />
  </View>
);
