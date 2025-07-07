'use client';

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Code2,
  BookOpen,
  Copy,
  Check,
  Github,
  ExternalLink,
  Terminal,
  Zap,
  MessageSquare,
} from 'lucide-react'

export default function SuiDeveloperMCP() {
  const [copiedSetup, setCopiedSetup] = useState(false)

  const setupCode = `{
  "mcpServers": {
    "sui-developer": {
      "command": "npx",
      "args": ["mcp-remote", "https://sui-developer-mcp.vercel.app/mcp"]
    }
  }
}`

  const copySetupCode = () => {
    navigator.clipboard.writeText(setupCode)
    setCopiedSetup(true)
    setTimeout(() => setCopiedSetup(false), 2000)
  }

  const tools = [
    {
      name: 'Ask_Sui_Move_Expert',
      description: 'Get expert help with Sui Move development, smart contract patterns, and best practices',
      example: 'How do I implement a staking mechanism with time-locked rewards?'
    },
    {
      name: 'Sui_Documentation_Search', 
      description: 'Search through Sui\'s comprehensive documentation with AI context',
      example: 'Find information about dynamic fields and object composition'
    },
    {
      name: 'Ask_Sui_SDK_Expert',
      description: 'TypeScript/Rust SDK assistance with code examples and patterns', 
      example: 'Show me how to create and sign a programmable transaction'
    },
    {
      name: 'Sui_Error_Explainer',
      description: 'Decode and solve Sui-specific errors with detailed solutions',
      example: 'Explain \'InvalidObjectOwner\' error and how to fix it'
    },
    {
      name: 'Sui_Best_Practices_Guide',
      description: 'Security, performance, and architecture recommendations',
      example: 'What are the security best practices for DeFi protocols on Sui?'
    }
  ]

  const usageExamples = [
    {
      category: 'Move Development',
      examples: [
        'How do I create an NFT collection in Sui Move?',
        'Show me how to implement a marketplace smart contract',
        'What\'s the best way to handle object ownership in my game?',
        'Help me understand capabilities pattern for access control'
      ]
    },
    {
      category: 'SDK Integration', 
      examples: [
        'How do I build a transaction with multiple move calls?',
        'Show me TypeScript code to interact with my Move module',
        'Help me set up Sui client in my React app',
        'What\'s the proper way to handle gas estimation?'
      ]
    },
    {
      category: 'Debugging',
      examples: [
        'Why am I getting \'InsufficientGas\' error?',
        'My transaction failed with \'ObjectNotFound\' - what went wrong?',
        'Help me debug this Move compilation error',
        'How can I optimize this transaction to use less gas?'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-teal-600/20 to-cyan-600/20" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              AI-Powered Development Assistant
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Sui Developer MCP
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-4 font-medium">AI-Powered Tools for Sui Developers</p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Access real-time documentation, expert help, and best practices directly in your IDE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Zap className="mr-2 h-5 w-5" />
                Quick Setup
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 bg-transparent"
              >
                <Terminal className="mr-2 h-5 w-5" />
                View Tools
              </Button>
            </div>
          </div>

          {/* Code Editor Mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-700 border-b border-slate-600">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-slate-400">sui-nft-contract.move</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-purple-400">module</div>
                <div className="text-blue-400 ml-4">nft_collection::collection {`{`}</div>
                <div className="text-gray-400 ml-8">{/* AI-assisted Move development */}</div>
                <div className="text-green-400 ml-8">
                  use sui::object::{`{`}`self`, UID{`}`};
                </div>
                <div className="text-green-400 ml-8">use sui::transfer;</div>
                <div className="text-slate-500 ml-4">...</div>
                <div className="text-blue-400">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quick Setup</h2>
              <p className="text-xl text-slate-400">Get started in minutes with Claude, Cursor, or Windsurf</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Install MCP Server</h3>
                    <p className="text-slate-400">Add the Sui Developer MCP server to your IDE configuration</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Configure Settings</h3>
                    <p className="text-slate-400">Copy the configuration JSON to your MCP settings file</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Start Developing</h3>
                    <p className="text-slate-400">Begin asking questions and getting AI-powered assistance</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-700 border-b border-slate-600">
                  <span className="text-sm text-slate-400">mcp-settings.json</span>
                  <Button size="sm" variant="ghost" onClick={copySetupCode} className="text-slate-400 hover:text-white">
                    {copiedSetup ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto">{setupCode}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDE-Specific Setup Instructions */}
      <section id="ide-specific-setup-instructions" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">IDE Setup Instructions</h2>
            <p className="text-xl text-slate-400">Follow these steps to integrate Sui Developer MCP with your favorite IDE</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Claude Desktop Setup</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400">
                <p className="mb-2">Location of config file:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Mac: ~/Library/Application Support/Claude/claude_desktop_config.json</li>
                  <li>Windows: %APPDATA%\Claude\claude_desktop_config.json</li>
                  <li>Linux: ~/.config/Claude/claude_desktop_config.json</li>
                </ul>
                <p className="mb-2">Steps:</p>
                <ol className="list-decimal list-inside">
                  <li>Open the config file (create if it doesn&apos;t exist)</li>
                  <li>Add the MCP server configuration</li>
                  <li>Restart Claude Desktop</li>
                  <li>Test by asking: &quot;What Sui development tools do you have available?&quot;</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mt-8 bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Windsurf Setup</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400">
                <p className="mb-2">Steps:</p>
                <ol className="list-decimal list-inside">
                  <li>Open Windsurf</li>
                  <li>Press Cmd/Ctrl + Shift + P to open command palette</li>
                  <li>Type &quot;MCP: Configure Servers&quot;</li>
                  <li>Add the server configuration</li>
                  <li>Restart Windsurf</li>
                  <li>Test in a new chat</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mt-8 bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Cursor Setup</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400">
                <p className="mb-2">Steps:</p>
                <ol className="list-decimal list-inside">
                  <li>Open Cursor Settings (Cmd/Ctrl + ,)</li>
                  <li>Go to &quot;Features&quot; → &quot;Model Context Protocol&quot;</li>
                  <li>Click &quot;Add MCP Server&quot;</li>
                  <li>Paste the configuration</li>
                  <li>Enable the server</li>
                  <li>Test in Cursor Chat</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Ask Anything About Sui</h2>
              <p className="text-xl text-slate-400">Get instant help with common development questions</p>
            </div>

            <div className="space-y-8">
              {usageExamples.map((category, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-4 text-teal-400">{category.category}</h3>
                  <div className="space-y-4">
                    {category.examples.map((example, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <MessageSquare className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                        <p className="text-slate-300">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Showcase */}
      <section className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Available Tools</h2>
            <p className="text-xl text-slate-400">Specialized tools for every aspect of Sui development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Code2 className="h-5 w-5 text-teal-400" />
                    {tool.name}
                  </CardTitle>
                  <CardDescription className="text-slate-400">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-900 rounded p-3 border border-slate-600">
                    <p className="text-sm text-slate-300 font-mono">Example: {tool.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Troubleshooting</h2>
              <p className="text-xl text-slate-400">Having issues? Check these common solutions.</p>
            </div>
            <div className="space-y-4">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>&quot;MCP server not found&quot;</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  <p>Make sure you&apos;ve restarted your IDE after adding the config.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>&quot;Connection failed&quot;</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  <p>Check that the URL is correct and accessible.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>&quot;No tools available&quot;</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  <p>Verify the config JSON syntax is valid.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle>&quot;Permission denied&quot;</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-400">
                  <p>Ensure your IDE has internet access.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Sui Developer MCP
              </h3>
              <p className="text-slate-400">Built by MotionEcosystem</p>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/MotionEcosystem/sui-developer-mcp" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="#ide-specific-setup-instructions">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Documentation
                </Button>
              </a>
              <a href="https://sui.io" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Sui Network
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>&copy; 2024 MotionEcosystem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}