// src/components/Content.js
import React from 'react';

const Content = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
      <section style={{ flex: 1 }}>
        <h2>First Section</h2>
        <p>Instructions (Placeholder text)</p>
        <button style={{ borderRadius: '5px', backgroundColor: '#007bff', color: '#ffffff', padding: '8px 12px', border: 'none', cursor: 'pointer' }}>Upload Files</button>
        <div style={{ marginTop: '10px', border: '1px dashed #cccccc', padding: '10px', minHeight: '100px' }}>Area to display uploaded files</div>
      </section>
      <section style={{ flex: 1 }}>
        <h2>Second Section</h2>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>First Tab</li>
              <li>Second Tab</li>
            </ul>
          </nav>
          <div style={{ flex: 1, border: '1px solid #cccccc', padding: '10px', overflowY: 'auto' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ fontWeight: 'bold' }}>Column 1</th>
                  <th style={{ fontWeight: 'bold' }}>Column 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ border: '1px solid #cccccc', padding: '10px', marginTop: '10px' }}>This tab is empty</div>
        </div>
      </section>
      <section style={{ flex: 1 }}>
        <h2>Third Section</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <button style={{ padding: '5px', cursor: 'pointer' }}>☰</button>
          <div style={{ marginLeft: '10px' }}>Menu to customize table views</div>
        </div>
      </section>
    </div>
  );
};

export default Content;
