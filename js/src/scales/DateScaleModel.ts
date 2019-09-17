/* Copyright 2015 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as _ from 'underscore';

import {
  LinearScaleModel, convertToDate
} from './LinearScaleModel';

export
class DateScaleModel extends LinearScaleModel{
  defaults() {
    return {...super.defaults(),
      _model_name: 'DateScaleModel',
      _view_name: 'DateScale',
    };
  }

  protected setInitState() {
    this.type = 'date';
    this.globalMin = (new Date()).setTime(0);
    this.globalMax = new Date();
  }

  minMaxChanged() {
    this.min = convertToDate(this.get('min'));
    this.max = convertToDate(this.get('max'));
    this.minFromData = (this.min === null);
    this.maxFromData = (this.max === null);

    this.updateDomain();
  }
}
