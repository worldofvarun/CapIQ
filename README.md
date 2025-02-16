<p align="center">
  <p align="center">
   <img width="150" height="150" src="apps/desktop/src-tauri/icons/icon.png" alt="Logo">
  </p>
	<h1 align="center"><b>CapIQ</b></h1>
	<p align="center">
		The open source photo and video organization tool.
    <br />
    <a href="https://capiq.app"><strong>CapIQ.app »</strong></a>
    <br />
    <br />
    <b>Download for </b>
		<a href="https://capiq.app/download">macOS</a>
    <br />
    <br />
    <i>~ CapIQ is currently in development, and will be available for macOS initially. Windows and Linux builds are planned for the future. Join the <a href="https://discord.gg/3W6npYXevD">CapIQ Discord</a> to help test future releases and join the community. ~</i>
    <br />
  </p>
</p>
<br/>

> NOTE: CapIQ is under active development. This repository is updated regularly with changes and new releases.

CapIQ is a macOS application that simplifies the post-processing workflow for photographers and videographers by automating the organization and categorization of large volumes of images and videos. It leverages AI to automate sorting, labeling, and describing media files, making it easier for users to manage their libraries efficiently.

<img src="apps/desktop/public/sample.png"/>

## Target Audience

- Professional photographers
- Hobbyist photographers  
- Videographers
- Content creators
- Anyone who deals with large volumes of media files

## Key Features

- AI-powered media organization and categorization
- Automated file sorting and labeling
- Smart media library management
- User-friendly interface
- Built for performance and efficiency

## Tech Stack

CapIQ is built using modern technologies:

- Tauri (Rust) for the desktop application
- React + TypeScript for the frontend
- TailwindCSS for styling
- AI integration for media analysis

## Local Development

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run the desktop app:
   ```bash
   pnpm desktop
   ```

3. Run the landing page:
   ```bash
   pnpm web
   ```

Note: This project uses Turborepo for monorepo management.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

## License

[MIT](LICENSE) © CapIQ
