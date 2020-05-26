/*
Copyright 2019 New Vector Ltd
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import SettingController from "./SettingController";
import dis from "../../dispatcher/dispatcher";

export default class CustomStatusController extends SettingController {
    onChange(level, roomId, newValue) {
        // Dispatch setting change so that some components that are still visible when the
        // Settings page is open (such as RoomTiles) can reflect the change.
        dis.dispatch({
            action: "feature_custom_status_changed",
        });
    }
}
