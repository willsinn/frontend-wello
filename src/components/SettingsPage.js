import React from "react";

const SettingsPage = () => {
  return (
    <div>
      <hr />
      <h3>About</h3>
      <div>
        <div>
          <h3>Avatar</h3>
          <div>
            <div title="William Sinn (williamsinn1)">
              <span>WS</span>
            </div>
            <button>Change Avatar…</button>
          </div>
          <div>
            <span name="public" role="presentation" />
            <span>Always Public</span>
          </div>
        </div>
        <form>
          <div>
            <span>Full Name</span>
            <div>
              <span name="public" role="presentation" />
              <span>Always Public</span>
            </div>
          </div>
          <div>
            <span>William Sinn</span>
          </div>
          <div>
            <span>Initials</span>
            <div>
              <span name="public" role="presentation" />
              <span>Always Public</span>
            </div>
          </div>
          <div>
            <span>WS</span>
          </div>
          <div>
            <span>Username</span>
            <div>
              <span>Always Public</span>
            </div>
          </div>
          <div>
            <input name="username" value="williamsinn1" />
          </div>
          <div>
            <span>Bio</span>
            <div>
              <span name="public" role="presentation" />
              <span>Always Public</span>
            </div>
          </div>
          <textarea />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
