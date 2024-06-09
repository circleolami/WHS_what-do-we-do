import './App.css'
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Skeleton } from "@/components/ui/skeleton"

function App() {
  const [packageName, setPackageName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 나중에 추가
      const mockResult = `Scan result for package: ${packageName}`;
      setResult(mockResult);
    } catch (err) {
      setError("Failed to scan the package");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="header">
        {/*<h1 className="header-title text-3xl font-extrabold tracking-tight lg:text-4xl">
          공급망 보안 관점에서의 머신러닝을 활용한<br/>악성 패키지 및 라이브러리 탐지
        </h1>
        <h3 className="header-subtitle leading-7 mt-6">
          OSS 취약점은 공급망을 통해 대규모로 퍼질 수 있으며, 정확한 관리와 대응이 없으면 신속한 문제 해결이 어려움.
          <br/>
          이는 공급망 공격으로 인한 보안 사고로 이어질 수 있으므로 조기에 탐지하고 대응하는 기술이 필요함.
        </h3>*/}
      </header>

      {/* 설명 */}
      <main className="main-content mx-auto max-w-sm mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Package Scanner</CardTitle>
            <CardDescription>Enter your package</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="input-group grid gap-4">
              <div className="input-item grid gap-2">
                <Label htmlFor="package">Package Name</Label>
                <Input
                  type="text"
                  id="package"
                  placeholder="Enter package name"
                  value={packageName}
                  onChange={(e) => setPackageName(e.target.value)}
                />
                <Button onClick={handleScan} disabled={isLoading}>
                  {isLoading ? <Skeleton />  : "실행하기"}
                </Button>
              </div>
            </div>
            {isLoading && <p className="loading-message">Scanning...</p>}
            {error && <p className="error-message">{error}</p>}
            {result && <p className="result-message">{result}</p>}
          </CardContent>
        </Card>
      </main>
    </>
  )
}

export default App
